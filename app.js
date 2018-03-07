// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const env = require('node-env-file');
const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
});

require('./server/routes')(app, jwt, express);
module.exports = app;
// use for vue production
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');
const port = process.env.PORT || 5000;
app.use(history())
app.use(serveStatic(__dirname));

var fs =  require("fs")

var IMG_PATH = process.env.IMG_PATH
var STATIC_PATH = process.env.STATIC_PATH
// configure app to use bodyParser()
// this will let us get the data from a POST


// ROUTES FOR OUR API
// =============================================================================
    var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)

var multer  = require('multer')
var upload = multer({ dest: '' })
router.post('/upload_avatar', upload.array(), function (req, res, next) {
    var base64Data = req.body.avatar;
    var root_path_base =  req.body.root_path;

    //imageBuffer  = new Buffer(base64Data, 'base64')
    var data = base64Data.replace(/^data:image\/\w+;base64,/, '');
    /* Create root path for images
        ex: IMG_PATH = /home/alex/Documentos/new_projects/insense-web/src/assets/images/
        root_path = /home/alex/Documentos/new_projects/insense-web/src/assets/images/:key
    */
    root_path = IMG_PATH + root_path_base ;
    if (!fs.existsSync(root_path)) {
        fs.mkdirSync(root_path);
    }

    var static_path = STATIC_PATH + root_path_base ;
    if (!fs.existsSync(static_path)) {
        fs.mkdirSync(static_path);
    }
    /* Create element path for images
        ex: IMG_PATH = /home/alex/Documentos/new_projects/insense-web/src/assets/images/
        root_path = /home/alex/Documentos/new_projects/insense-web/src/assets/images/:key
        element_path = /home/alex/Documentos/new_projects/insense-web/src/assets/images/:key/:key2
    */
    let id = req.body.id
    var element_path = root_path + "/" + id;
    if (!fs.existsSync(element_path)){
        fs.mkdirSync(element_path);
    }
    var element_path2 = static_path + "/" + id;
    if (!fs.existsSync(element_path2)){
        fs.mkdirSync(element_path2);
    }
    var text = req.body.filename;;


    fs.writeFile(element_path + "/" + text + ".png", data, {encoding: 'base64'}, function(err){
        if (err) {
            res.status(200).send({success: "images error", path: element_path + "/" + text + ".png" })
        }
        else{
            var image_path = root_path + "/" + id + "/" + text + ".png"
            console.log('img ' + image_path);

            fs.writeFile(element_path2 + "/" + text + ".png", data, {encoding: 'base64'}, function(err){
                if (err) {
                    res.status(200).send({success: "images error", path: image_path})
                }else{
                    var image_path2 = static_path + "/" + id + "/" + text + ".png"
                    res.status(200).send({success: "images successfully uploaded", path: image_path,  static_path: image_path2, image_name:  text + ".png" })
                }
            });
        }
    });

})

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api/images/', router);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of INSENSE.',
}));
// START THE SERVER
// =============================================================================
 app.listen(port);

console.log('Magic happens on port ' + port);
