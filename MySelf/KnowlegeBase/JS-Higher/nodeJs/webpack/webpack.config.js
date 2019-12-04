module.exports={
    //当前执行文件的路径
    entry:__dirname+"/app/index.js",
    output:{
        path:__dirname+"/build",
        filename:"bundle.js"
    },
    watch:true,
    module:{
        loaders:[{
            test:/\.css$/,
            loader:"style-loader!css-loader"
        }]
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}