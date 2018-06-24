const getRate = require('./getRate');
const path = require('path');
const parser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.post('/getRate', (req, res) => { 
    var weightError = '';  
    var mailInfo = getRate(req.body.mailType, req.body.weight);
    if (req.body.weight > 0 && req.body.weight <= 13) {
        res.render('calculated', { mailInfo : mailInfo, weightError : weightError });
    }
    else {
        weightError = 'Error: Exceeds the weight limit for this mail type.'
        res.render('calculated', { mailInfo : mailInfo, weightError : weightError });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));