console.warn('Hello World!');
var inshorts = require('inshorts').init();
inshorts.getNews('technology',function(response,error){
    if(!error){
        alert(request)
    }else{
        console.warn(error);
    }
})