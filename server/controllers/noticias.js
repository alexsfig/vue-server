/***** Noticias Controller *****/
const Noticia = require('../models').Noticias;

module.exports = {
	/**
     * @api {post} /tags/ Create tag
     * @apiName CreateNoticia
     * @apiGroup NoticiaAPI
     *
     * @apiPermission Authorized users only via token
     * @apiParam {String} name Name of the tag
     * @apiParamExample {json} Input
     *    {
     *      "name": "myNoticia"
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
			return Noticia.create({
				name: data.name,
			})
			.then(tag => res.status(201).send(tag))
			.catch(error => res.status(400).send(error));
		}
	},
	/**
     * @api {get} /tags/ Get tags
     * @apiName GetNoticia
     * @apiGroup NoticiaAPI
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
		return Noticia.all()
			.then(tags => res.status(200).send(tags))
			.catch(error => res.status(400).send(error));

	},
	/**
     * @api {put} /tags/:id Update tag
     * @apiName UpdateNoticia
     * @apiGroup NoticiaAPI
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
			Noticia.findById(req.params.id)
			.then(tag =>{
				if(!tag){
					res.status(404).send({
						message: 'Noticia not found'
					});
				}else{
					return Noticia.update({
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
     * @apiName FindNoticia
     * @apiGroup NoticiaAPI
     *
     * @apiPermission Authorized users only via token
     *
     * @apiSuccess {String} name Name of the tag.
     * @apiSuccess {Boolean} status Status of the tag.
     *
     * @apiError NoticiaNotFound 404 Noticia not found.
     * @apiError InvalidAuthentication 403 Authentication failed.
     * @apiExample {curl} Example usage:
     *     curl -i http://localhost:8000/api/v1/tags/1
     */
	find(req, res){
		if (req.params.id) {
			return Noticia.findOne({
				where: {
					id: req.params.id
				}
			})
			.then(tag => {
				if(!tag){
					res.status(404).send({
						success: false,
						message: "Noticia not found"
					});
				}else{
					res.status(200).send(tag);
				}
			})
			.catch(error => res.status(400).send(error));
		}else {
            return res.status(404).send({
            	message: 'Noticia not found',
        	});
		}
	},
};
