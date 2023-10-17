const expressFunction = require('express');
const expressApp = expressFunction();

const students = [
                {stdid: 'B6326357', name: 'Danudech Chaiphondech'},
                {stdid: 'B6300000', name: 'Jaidee Deejai'},
                ];

expressApp.get('/api/resource/students/:stdid', function(req, res){
    const stdid = req.params.stdid;
    if(stdid == 'B6326357'){
        res.status(200).send(students[0]);
    }else if(stdid == 'B6300000'){
        res.status(200).send(students[1]);
    }else{
        res.status(404).send('Error 404 not found');
    }
});

expressApp.listen(3000, function(){
    console.log('Listeing on port 3000');
})