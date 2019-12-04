//mongodb mongod mongo mongoose


// 启动mongodb服务器： mongod --dbpath=文件路径
// 进入MongoDB环境 mongo
// 查看数据库           show dbs
// 选择要操作的数据库    use DBNAME
// 查看集合            show collections
// 查看集合里的内容     db.COLLECTIONS(集合名称).find()
// 查看当前操作的数据库  db / db.getName()
// 创建数据库
//      先是 use 要创建的数据库名，再然后添加数据
//      数据的添加  db.CELLECTIONSNAME.insert({name:"lala",age"18})

//创建数据库 test 集合名称 mytest  添加数据 {name:"拉拉",age:18}
//删除数据库 db.dropDatabase()

//创建集合   db.createCollection("集合NAME")
//删除集合  db.集合名字.drop()


//数据操作
//===>增加   db.COLLECTIONNAME.INSERT({name:"haha",age:19})
//如果通过id能找到就更新，如果找不到就添加
//db.COLLECTIONNAME.save({name:"haha",age:19})

//===>更新    给id  db.person.save({_id: ObjectId("5a67f515ee210429880a0552"),name:"nana",age:18})
//db.COLLECTIONNAME.update([{条件},{更新的内容},{配置项}])
//如果要更新能够匹配的多个选项，就配置{multi:true}
//db.person.update({name:"lili"},{$set:{age:18}},{multi:true})
//注意：==》只会更新符合条件的多条数据的一条数据

//===>删除    remove()
//DELETE from users WHERE id=6==>mySQL语法
//db.COLLECTIONNAME.remove({name:"lala"},{配置项：可选})
//只删除一条数据==》db.COLLECTIONNAME.remove({条件},{justOne:true})
//注意：==》默认删除符合条件的所有记录

//===>查询数据
//db.COLLECTIONNAME.find()
//db.COLLECTIONNAME.find().pretty()  格式化数据
//find({条件},{字段})
//条件：
//   大于 gt  小于 lt
//   等于 :
//   大于等于 gte 小于等于 lte
//   不等于 ne
// db.COLLECTIONNAME.find({age:{$gt:19}}) 年龄大于19的人

// db.person.find({age:{$gt:19}},{name:1(true)})显示范围内的name字段名
// 类比 select name,age from user

// 查询所有以"王"为开头法人数据
// 类比 select * from user like 王%
// db.person.find({name:/^li/})  查询名字以li为开头的数据

//查询数据名字是lili,并且年龄30  ,并且关系就是直接写在对象里，用逗号隔开
//db.person.find({name:"lili",age:20})

//或者关系
//查询年龄等于48或者28
//db.person.find({$or:[{age:20},{age:30}]})

//db.COLLECTIONNAME.find({$or:[{name:"王健林"},{age:{$gt:28}}]})
//王开头并且年龄大于30

//===>分页相关
// SELECT * FROM user LIMIT 5,5

//跳过2条数据，即从第三条开始查，查询条数3条
//db.COLECTIONNAME.find().skip(2).limit(3)

//===>排序查询
//1 --正序   -1 --倒序
//db.COLLECTIONNAME.find().sort({age:1})  查数据时，年龄数字不要加双引号，不然排序容易出错，字符串不能排序
//查询所有姓李的或者姓王的，按照年龄倒序排列，只查询结果的两条数据
//db.person.find({$or:[{name:/^李/},{name:/^马/}]}).sort({age:-1}).skip(0).limit(2)

//===>  查询数量
//SELECT COUNT(*) FROM user
//db.COLLECTIONNAME.find().count()






















