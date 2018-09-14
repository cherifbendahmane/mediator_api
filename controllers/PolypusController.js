var multer = require('multer');
var bodyParser = require('body-parser');
// var csv = require('./../services/csvparse.js');
// var htmlspecialchars = require('htmlspecialchars');
// var fs = require('fs');
// var read = fs.createReadStream;
// var path = require('path');



var Sequelize = require('sequelize');
const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
  host: CONFIG.db_host,
  dialect: CONFIG.db_dialect,
  port: CONFIG.db_port,
  operatorsAliases: false
});



const importcsv = async function(req, res){

    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './public/uploads/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            var extension = file.originalname.split('.')[file.originalname.split('.').length -1];
            cb(null, 'fichier-contacts.' + extension);
        }
    });

    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

    const body = req.body;
    
            upload(req,res,function(err){
                console.log(req.file);
                if(err){
                     res.json({error_code:1,err_desc:err});
                     return;
                }
                 res.json({error_code:0,err_desc:null});
            })
    
}
module.exports.importcsv = importcsv;

const get = async function(req, res){

read(path.join(__dirname, "../public/uploads/fichier-contacts.csv"))
  .pipe(csv())
  .on('data', function (data) {

    for( let key in data){
      var columns = key.split(";");
      var values = data[key].split(";");
      var list_columns = "";
      for (let key2 in columns){
        list_columns = list_columns + htmlspecialchars(columns[key2]).toLowerCase() + ",";
      }
      var list_values = "";
      for (let key3 in values){
        list_values = list_values + "'"+ htmlspecialchars(values[key3]).toLowerCase() + "'" + ",";
      }
    }
    sequelize.query("INSERT INTO Receivers (" + list_columns.slice(0,-1) + ", createdAt,updatedAt) VALUES (" + list_values.slice(0,-1) + ", now(),now());");
  })

}
module.exports.get = get;

const download = async function(req, res){

  res.download(path.join(__dirname, "../public/uploads/fichier-contacts.csv"));

}
module.exports.download = download;

const appcsv = async function(req, res){

    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './public/uploads/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            var extension = file.originalname.split('.')[file.originalname.split('.').length -1];
            cb(null, 'fichier-applications.' + extension);
        }
    });

    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

    const body = req.body;
    
            upload(req,res,function(err){
                console.log(req.file);
                if(err){
                     res.json({error_code:1,err_desc:err});
                     return;
                }
                 res.json({error_code:0,err_desc:null});
            })
    
}
module.exports.appcsv = appcsv;

const getappcsv = async function(req, res){

  res.download(path.join(__dirname, "../public/uploads/fichier-applications.csv"));

}
module.exports.getappcsv = getappcsv;

const writeappcsv = async function(req, res){

read(path.join(__dirname, "../public/uploads/fichier-applications.csv"))
  .pipe(csv())
  .on('data', function (data) {

    for( let key in data){
      var columns = key.split(";");
      var values = data[key].split(";");
      var list_columns = "";
      for (let key2 in columns){
        list_columns = list_columns + htmlspecialchars(columns[key2]).toLowerCase() + ",";
      }
      var list_values = "";
      for (let key3 in values){
        list_values = list_values + "'"+ htmlspecialchars(values[key3]).toLowerCase() + "'" + ",";
      }
    }
    sequelize.query("INSERT INTO Applications (" + list_columns.slice(0,-1) + ", createdAt,updatedAt) VALUES (" + list_values.slice(0,-1) + ", now(),now());");
  })

}
module.exports.writeappcsv = writeappcsv;