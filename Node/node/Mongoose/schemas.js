var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Test')
// 公共函数
var db = mongoose.connection
function common (err,data){
  if(err){
    return console.log(err)
  }else{
    console.log(data)
    dog.findSimilarTypes(function(err,dogs){
      console.log(dogs)
    })
  }
}
db.on('error',function(){
  return console.log(error)
})
db.on('open',function(){
  console.log('connection successful~~')
})
var animalSchema = new mongoose.Schema({
  name: String,
  type: String
})
// 实例上的方法
animalSchema.methods.findSimilarTypes = function(cb){
  return this.model('Animal').find({type: this.type},cb)
}
var Animal = mongoose.model('Animal',animalSchema)
var dog = new Animal({name: 'vivi', type: 'dog'})
var woof = new Animal({name: '球球', type: 'dog'})
var cat = new Animal({name: '哈哈', type: 'cat'})
// dog.save(common)
// woof.save(common)
