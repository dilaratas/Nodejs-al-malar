// basit http login modülleri

var http= require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){

    if(req.url=='/'){

        fs.readFile('index.html',function(err,data){
            res.write(data);
            res.end('mesaj bitti');
        
        });

    }

if(req.url=='/login'){

    fs.readFile('login.html',function(err,data){
        res.write(data);
        res.write('deneme');
        res.write('mesaj bitti');
    
    });
   
}

console.log(req.url);





});

server.listen(8000);