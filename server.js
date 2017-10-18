// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var fs =  require("fs")
var BASE_PATH = "/var/www/html/insense-web/src/assets/images/";
// configure app to use bodyParser()
// this will let us get the data from a POST
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
var port = process.env.PORT || 5002;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of INSENSE.',
}));
var multer  = require('multer')

var upload = multer({ dest: '' })


router.post('/upload_avatar', upload.array(), function (req, res, next) {
    var base64Data = req.body.avatar;
    var id = req.body.id;
    var root_path =  req.body.root_path;

    //imageBuffer  = new Buffer(base64Data, 'base64')
    var data = base64Data.replace(/^data:image\/\w+;base64,/, '');
    /* Create root path for images 
        ex: BASË_PATH = /home/alex/Documentos/new_projects/insense-web/src/assets/images/ 
        root_path = /home/alex/Documentos/new_projects/insense-web/src/assets/images/employees
    */
    root_path = BASE_PATH + root_path ;  
    if (!fs.existsSync(root_path)) {
        fs.mkdirSync(root_path);
    }
    /* Create element path for images 
        ex: BASË_PATH = /home/alex/Documentos/new_projects/insense-web/src/assets/images/ 
        root_path = /home/alex/Documentos/new_projects/insense-web/src/assets/images/employees
        element_path = /home/alex/Documentos/new_projects/insense-web/src/assets/images/employees/1
    */
    
    var element_path = root_path + "/" + id;

    if (!fs.existsSync(element_path)){
        fs.mkdirSync(element_path);
    }
    fs.writeFile(element_path + "/avatar.png", data, {encoding: 'base64'}, function(err){
        if (err) {
            image_path = root_path + "/" + id +"/avatar.png"
            res.status(200).send({success: "images error", path: image_path })   
        }else{
            res.status(200).send({success: "images successfully uploaded"})   
        }
    });
  
})

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);