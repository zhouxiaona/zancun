var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Test')
var db = mongoose.connection
db.on('error', function(){
  return console.log('error')
})
db.on('open',function(){
  console.log('successful connection')
})
var kittySchema = new mongoose.Schema({
  name: String
})

kittySchema.methods.speak = function(){
  var greeting = this.name ? 'Meow name is' + this.name : "I don't have a name";
  console.log(greeting)
}

var kitten = mongoose.model('kitten',kittySchema)

var silence = new kitten({name: 'Silence'})
var fluffy = new kitten({name: 'Fluffy'})
var noodlefluffy = new kitten({name: 'Noodlefluffy'})
// silence.save(common)
// fluffy.save(common)
// noodlefluffy.save(common)
// 公用函数
function common(err,data){
  if(err){
    return console.log(err)
  }else{
    console.log(data)
    // fluffy.speak()
  }kitten
}
// kitten.find(common)
.find({name: /^fluffy/},common)
// console.log(silence.name)
// silence.speak();
