const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  nameAnimal: {type: String, },
  typeAnimal: {type: String,  },
  gender:{type: String,  },
  age:{type: String,  },
  breed: {type: String,  },
  statusAnimal: {type: String},
  descrip: {type: String,},
  feed: {type: String, },
  Pnumber: {type: String, },
  img:{type: String, },
})

module.exports = model('Animal', schema)

