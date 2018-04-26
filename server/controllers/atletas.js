/***** Atletas Controller *****/
const Atleta = require('../models').Atleta;
const Persona = require('../models').Persona;
const Ranking = require('../models').Ranking;

module.exports = {
	/**
     * @api {post} /tags/ Create tag
     * @apiName CreateAtleta
     * @apiGroup AtletaAPI
     *
     * @apiPermission Authorized users only via token
     * @apiParam {String} name Name of the tag
     * @apiParamExample {json} Input
     *    {
     *      "name": "myAtleta"
     *    }
     *
     * @apiSuccess {String} name Name of the tag.
     * @apiSuccess {Boolean} status Status of the tag.
     *
     * @apiError BadRequest 400 There were an error on the request.
     * @apiError InvalidAuthentication 403 Authentication failed.
     * @apiExample {curl} Example usage:
     *     curl -i http://localhost:8000/api/v1/tags/
     */
	create(req, res){
		if(!req.is('application/json')){
			return res.status(403).send({
				success: false,
				message: 'Expected application/json'
			});
		}else{
			data = req.body || {};
			return Atleta.create({
				name: data.name,
			})
			.then(tag => res.status(201).send(tag))
			.catch(error => res.status(400).send(error));
		}
	},
	/**
     * @api {get} /tags/ Get tags
     * @apiName GetAtleta
     * @apiGroup AtletaAPI
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
		return Atleta.findAll(
			{
				include: [
					{
						model: Persona, as: 'persona'
					},
					{
						model: Ranking, as: 'ranking'
					},
                ],
			}
		)
		.then(tags => res.status(200).send(tags))
		.catch(error => res.status(400).send(error));

	},
	/**
     * @api {put} /tags/:id Update tag
     * @apiName UpdateAtleta
     * @apiGroup AtletaAPI
     *
     * @apiPermission Authorized users only via token
     * @apiParam {String} name Name of the tag
	 * @apiParam {Boolean} status Status of the tag.
     * @apiParamExample {json} Input
     *    {
     *      "name": "My tag",
     *		"status": true
     *    }
     *
     * @apiSuccess {String} name Name of the tag.
     * @apiSuccess {Boolean} status Status of the tag.
     *
     * @apiError BadRequest 400 There were an error on the request.
     * @apiError InvalidAuthentication 403 Authentication failed.
     * @apiExample {curl} Example usage:
     *     curl -i http://localhost:8000/api/v1/tags/1
     */
	update(req, res){
		if(!req.is('application/json')){
			res.status(403).send({
				success: false,
				message: 'Expected application/json'
			});
		}else{
			data = req.body || {};
			Atleta.findById(req.params.id)
			.then(tag =>{
				if(!tag){
					res.status(404).send({
						message: 'Atleta not found'
					});
				}else{
					return Atleta.update({
						name: data.name || tag.name,
						status: data.status || tag.status
					})
					.then(() => res.status(200).send(tag))
					.catch(error => res.status(400).send(error));
				}
			})
			.catch(error => res.status(400).send(error));
		}
	},
	/**
     * @api {get} /tags/:id Find tag
     * @apiName FindAtleta
     * @apiGroup AtletaAPI
     *
     * @apiPermission Authorized users only via token
     *
     * @apiSuccess {String} name Name of the tag.
     * @apiSuccess {Boolean} status Status of the tag.
     *
     * @apiError AtletaNotFound 404 Atleta not found.
     * @apiError InvalidAuthentication 403 Authentication failed.
     * @apiExample {curl} Example usage:
     *     curl -i http://localhost:8000/api/v1/tags/1
     */
	find(req, res){
		if (req.params.id) {
			return Atleta.findOne({
				where: {
					id: req.params.id
				},
				include: [
					{
						model: Persona, as: 'persona'
					},
					{
						model: Ranking, as: 'ranking'
					},
                ],
			})
			.then(tag => {
				if(!tag){
					res.status(404).send({
						success: false,
						message: "Atleta not found"
					});
				}else{
					res.status(200).send(tag);
				}
			})
			.catch(error => res.status(400).send(error));
		}else {
            return res.status(404).send({
            	message: 'Atleta not found',
        	});
		}
	},
};
