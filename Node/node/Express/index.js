const express = require('express')
const app = express()
const router = express.Router()
var myLogger = function(req,res,next){
  console.log('LOGGER')
  next()
}
app.use(myLogger)
app.get('/',(req,res)=>{
  res.send('Hello World')
})


// app.get('/example/b',function(req,res,next){
//   console.log('the response will be sent by the next function ...')
//   res.send('Hello from A!')
//   next()
// },function(req,res){
//   res.send('Hello from B!')
// })

// var cb0 = function(req,res,next){
//   console.log('CB0')
//   next()
// }
// var cb1 = function(req,res,next){
//   console.log('CB1')
//   next()
// }
// var cb2 = function(req,res,next){
//   res.send('zhouna comming here')
// }
// app.get('/zhouna/c',[cb0,cb1,cb2])

// app.get('/user/:id', function(req,res,next){
//   if(req.params.id == 0) next('route')
//   else next()
// },function(req,res,next){
//   res.send('regular')
// })

// app.get('/user/:id',function(req,res,next){
//   res.send('special')
// })

// router.use(function(req,res,next){
//   if(!req.Headers['x-auth']) return next('router')
//   next()
// })
// router.get('/',function(req,res){
//   res.send('hello user')
// })
// app.use('/admin',router,function(req,res){
//   console.log('error')
//   res.sendStatus(401)
// })

app.listen(3000,()=>{console.log('app listening on port 3000')})