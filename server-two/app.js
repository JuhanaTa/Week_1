const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'pug')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')

});

app.get('/catinfo', (req, res) => {
    const cat = {
        'name': 'Frank',
        'age': 6,
        'weight': 5,
    };
    res.json(cat);

    app.get('/', (req, res) => {
        res.json({
            message: 'Hello World!'
        });

    });
});