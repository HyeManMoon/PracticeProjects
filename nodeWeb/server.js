const express = require('express');

var app = express();

app.get('/',(req, res)=> {
    // res.send('<h1>hello express</h1>');
    res.send({
        name:'Henry',
        likes: [
            'pizza',
            'games'
        ]
    })
});
app.get('/about',(req, res) => {
    res.send('About Page');
})
app.get('/bad', (req, res) => {
    res.send({
        status: 'bad'
    });
});

app.listen(3000);