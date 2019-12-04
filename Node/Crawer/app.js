const request=require("request")
const cheerio=require("cheerio")
const  mysql=require('mysql')
const db = mysql.createPool({host:'数据库地址',user:'账号',password:'密码',database:'数据库名'});