/***** Categorias Controller *****/
const Circuito = require('../models').Circuito;
const Playa = require('../models').Playa;
const Categoria = require('../models').Categoria;
const Ranking = require('../models').Ranking;
const Atleta = require('../models').Atleta;
const Persona = require('../models').Persona;

module.exports = {
	/**
     * @api {get} /tags/ Get tags
     * @apiName GetCategoria
     * @apiGroup CategoriaAPI

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
		return Categoria.findCategoria(
			{
			}
		)
		.then(tags => res.status(200).send(tags))
		.catch(error => res.status(400).send(error));

	},
	/**
     * @api {get} /tags/:id Find tag
     * @apiName FindCategoria
     * @apiGroup CategoriaAPI
     *
     * @apiPermission Authorized users only via token
     *
     * @apiSuccess {String} name Name of the tag.
     * @apiSuccess {Boolean} status Status of the tag.
     *
     * @apiError CategoriaNotFound 404 Categoria not found.
     * @apiError InvalidAuthentication 403 Authentication failed.
     * @apiExample {curl} Example usage:
     *     curl -i http://localhost:8000/api/v1/tags/1
     */
	find(req, res){
		if (req.params.id) {
			return Categoria.findOne({
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
						message: "Categoria not found"
					});
				}else{
					res.status(200).send(tag);
				}
			})
			.catch(error => res.status(400).send(error));
		}else {
            return res.status(404).send({
            	message: 'Categoria not found',
        	});
		}
	},

	findAtletas(req, res){
		if (req.params.id) {
			return Categoria.findOne({
				where: {
					id: req.params.id
				},
				order: [
        				[
          					{model: Ranking, as: 'ranking'}, 'lugar', 'ASC',
                                                //{model: Persona, as: 'persona'}, 'apellido', 'ASC'
                                        ],
		   		],
				include: [
					{
						model: Ranking, as: 'ranking',
						where: {
							anio: req.params.anio
						},
						include: [
							{
								model: Atleta, as: 'atleta',
								include: [
									{
										model: Persona, as: 'persona'
									},
								]
							},
						]
					},
        ]
			})
			.then(tag => {
				if(!tag){
					res.status(404).send({
						success: false,
						message: "Categoria not found"
					});
				}else{
					res.status(200).send(tag);
				}
			})
			.catch(error => res.status(400).send(error));
		}else {
            return res.status(404).send({
            	message: 'Categoria not found',
        	});
		}
	},


};
