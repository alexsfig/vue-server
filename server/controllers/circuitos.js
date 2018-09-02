/***** Circuitos Controller *****/
const Circuito = require('../models').Circuito;
const Persona = require('../models').Persona;
const Playa = require('../models').Playa;
const Categoria = require('../models').Categoria;
const Atleta = require('../models').Atleta;
const AtletasCircuito = require('../models').AtletasCircuito;

module.exports = {
	/**
     * @api {get} /tags/ Get tags
     * @apiName GetCircuito
     * @apiGroup CircuitoAPI
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
		return Circuito.findAll(
			{
				include: [
					{
						model: Playa, as: 'playa'
					},
        ],
			}
		)
		.then(tags => res.status(200).send(tags))
		.catch(error => res.status(400).send(error));

	},
	/**
     * @api {get} /tags/:id Find tag
     * @apiName FindCircuito
     * @apiGroup CircuitoAPI
     *
     * @apiPermission Authorized users only via token
     *
     * @apiSuccess {String} name Name of the tag.
     * @apiSuccess {Boolean} status Status of the tag.
     *
     * @apiError CircuitoNotFound 404 Circuito not found.
     * @apiError InvalidAuthentication 403 Authentication failed.
     * @apiExample {curl} Example usage:
     *     curl -i http://localhost:8000/api/v1/tags/1
     */
	find(req, res){
		if (req.params.id) {
			return Circuito.findOne({
				where: {
					id: req.params.id
				},
				include: [
					{
						model: Categoria, as: 'categoria'
					}
				],
			})
			.then(tag => {
				if(!tag){
					res.status(404).send({
						success: false,
						message: "Circuito not found"
					});
				}else{
					res.status(200).send(tag);
				}
			})
			.catch(error => res.status(400).send(error));
		}else {
            return res.status(404).send({
            	message: 'Circuito not found',
        	});
		}
	},
	atletasCircuito(req, res){
		if (req.params.id) {
			return Circuito.findOne({
				where: {
					id: req.params.id
				},
				order: [
					[
                				{model: AtletasCircuito, as: 'atletas_circuito'}, 'puntos', 'DESC'
                      			]
				],
				include: [
					{
						model: Categoria, as: 'categoria'
					},
					{
						model: AtletasCircuito,
						as: 'atletas_circuito',
						include: [
              {
								model: Atleta,
								as: 'atleta',
								include: [
		              {
										model: Persona,
										as: 'persona'
									}
		            ]
							}
            ]
					}
				],
			})
			.then(tag => {
				if(!tag){
					res.status(404).send({
						success: false,
						message: "Circuito not found"
					});
				}else{
					res.status(200).send(tag);
				}
			})
			.catch(error => res.status(400).send(error));
		}else {
            return res.status(404).send({
            	message: 'Circuito not found',
        	});
		}
	},
};
