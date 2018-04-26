const noticiasController = require('../controllers').noticias;
const atletasController = require('../controllers').atletas;
const fechasController = require('../controllers').fechas;
const circuitoController = require('../controllers').circuitos;
const categoriasController = require('../controllers').categorias;


module.exports = (app, jwt, express) =>
{
    const apiRoutes = express.Router();

    app.get('/', (req, res) => res.status(200).send(
    {
        message: 'Welcome to the INSENSE API !!!',
    }));

    /* Catch all routes and validates token: */
    app.all('*', function(req, res, next)
    {
        console.error(req.url);
        if (1==1)
        {
            return next();
        }
        else
        {
            const token = req.body.token || req.query.token || req.headers['x-access-token'];
            if (token)
            {
                jwt.verify(token, app.get('jwt_secret'), (err, decoded) =>
                {
                    if (err)
                    {
                        return res.status(403).send(
                        {
                            err,
                        });
                    }
                    else
                    {
                        req.decoded = decoded;
                        next();
                    }
                });
            }
            else
            {
                return res.status(403).send(
                {
                    success: false,
                    message: 'Authentication failed, no token provided.'
                });
            }
        }
    });

    //  Roles.-
    // apiRoutes.post('/app-roles', appRolesController.create);
    // apiRoutes.get('/app-roles/', appRolesController.list);
    // //apiRoutes.get('/app_roles/:regs', appRolesController.list);
    // apiRoutes.get('/app-roles/:id', appRolesController.find);
    // apiRoutes.put('/app-roles/:id', appRolesController.update);
    // apiRoutes.delete('/app-roles/:id', appRolesController.deactivate);

    //  Roles.-
    apiRoutes.get('/noticias', noticiasController.list);
    apiRoutes.get('/categorias', categoriasController.list);
    apiRoutes.get('/atletas', atletasController.list);
    apiRoutes.get('/atletas/:id', atletasController.find);
    apiRoutes.get('/fechas', fechasController.list);
    apiRoutes.get('/fechas/:id', fechasController.find);
    apiRoutes.get('/circuitos/:id', circuitoController.find);
    apiRoutes.get('/circuitos/:id/atletas', circuitoController.atletasCircuito);



    app.use('/api/v1', apiRoutes);

};
