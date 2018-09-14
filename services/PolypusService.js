const Polypus 			= require('./../models').Polypus;
const validator     = require('validator');

// const getUniqueKeyFromBody = function(body){
//     let unique_key = body.unique_key;
//     if(typeof unique_key==='undefined'){
//         if(typeof body.email != 'undefined'){
//             unique_key = body.email
//         }else if(typeof body.phone != 'undefined'){
//             unique_key = body.phone
//         }else{
//             unique_key = null;
//         }
//     }

//     return unique_key;
// }
// module.exports.getUniqueKeyFromBody = getUniqueKeyFromBody;

const createPolypus = async function(polypusInfo){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    console.log(polypusInfo)
    Polypus.create(polypusInfo);
}
module.exports.createPolypus = createPolypus;
