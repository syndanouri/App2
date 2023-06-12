const mongoose = require('mongoose');


const annonceSchema = new mongoose.Schema({
categorie:{
    type: String
},
price:{
    type: Number
},
Types:{
    type:String
},
location:{
    type: String
},
picture:{
    type: String
},
user:{
    type : mongoose.Schema.Types.ObjectId,
    ref:'User'
}
})


module.exports = mongoose.model('Annonce',annonceSchema)