var ht = require('http');
const serv =ht.createServer(function(req,res){
    res.write("<html><head></head><body><center><h3>Server Running ....</h3></center></body></html>");
    if(req.url=="/number")
    {
        res.write("<html><body><center>{number :[1,2,5,8,13]}</center></body></html>");
        res.end();
    }

    else if(req.url=="/number/rand"){
        res.write("<html><body><center>{number :[2,9,5,1,6,22]}</center></body></html>");
        res.end();
    }

    else if(req.url=="/number/even"){
        res.write("<html><body><center>{number :[0,2,4,6,8,10,12,14,16,18,20,22,24]}</center></body></html>");
        res.end();
    }

    else if(req.url=="/number/odd"){
        res.write("<html><body><center>{number :[1,3,5,7,9,11,13,15,17,19,21,23]}</center></body></html>");
        res.end();
    }

    else if(req.url=="/number/prime"){
        res.write("<html><body><center>{number :[2,3,5,7,11,13,17,19,23,29]}</center></body></html>");
        res.end();
    }

    else if(req.url=="/number/fib"){
        res.write("<html><body><center>{number :[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]}</center></body></html>");
        res.end();
    }


    else{
        res.write("<html><body><center>put your link in the url like localhost:8080/numbers/prime</center></body></html>");
    }
});

serv.listen(8008);
console.log("server running at port 8008");