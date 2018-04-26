/***** Fechas Controller *****/
const Fecha = require('../models').Fecha;
const Circuito = require('../models').Circuito;
const Playa = require('../models').Playa;
const Categoria = require('../models').Categoria;

module.exports = {
	/**
     * @api {get} /tags/ Get tags
     * @apiName GetFecha
     * @apiGroup FechaAPI
     *
     * @apiPermission Authorized users only via token
     *
     * @apiSuccess {String} name Name of the tag.
     * @apiSuccess {Boolean} status Status of the tag.
     *
     * @apiExample {curl} Example usage:
     *     curl -i http://localhost:8000/api/v1/tags/
     */
	list(req, res){
		return Fecha.findAll(
			{
				include: [
					{
						model: Playa, as: 'playa'
					},
        ],
				order: [
            ['fecha', 'DESC'],
        ],
			}
		)
		.then(tags => res.status(200).send(tags))
		.catch(error => res.status(400).send(error));

	},
	/**
     * @api {get} /tags/:id Find tag
     * @apiName FindFecha
     * @apiGroup FechaAPI
     *
     * @apiPermission Authorized users only via token
     *
     * @apiSuccess {String} name Name of the tag.
     * @apiSuccess {Boolean} status Status of the tag.
     *
     * @apiError FechaNotFound 404 Fecha not found.
     * @apiError InvalidAuthentication 403 Authentication failed.
     * @apiExample {curl} Example usage:
     *     curl -i http://localhost:8000/api/v1/tags/1
     */
	find(req, res){
		if (req.params.id) {
			return Fecha.findOne({
				where: {
					id: req.params.id
				},
				include: [
					{
						model: Playa, as: 'playa'
					},
					{
						model: Circuito, as: 'circuitos',
						include: [
							{
								model: Categoria, as: 'categoria'
							},
						]
					},
        ]
			})
			.then(tag => {
				if(!tag){
					res.status(404).send({
						success: false,
						message: "Fecha not found"
					});
				}else{
					res.status(200).send(tag);
				}
			})
			.catch(error => res.status(400).send(error));
		}else {
            return res.status(404).send({
            	message: 'Fecha not found',
        	});
		}
	},
};
