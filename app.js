var fs=require('fs')
var http=require('http')

console.log("Server Stared")

http.createServer(function (req,res){
    fs.readFile(__dirname+req.url,function (err,data){
        if(err){
            res.writeHead(404)
            res.end("URL Salah File " + req.url+" Tidak Ditemukan")
            return
        }
        res.writeHead(200)
        res.end(data)
    })

}).listen(8080)