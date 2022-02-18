const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use(express.static('views/assests'));

console.log('yes');

app.get('/', (req, res) => {
    res.render('index', {
        par: "Iam webdeveloper I STUDIED at Taiz univeristyworked at lamas company, lamas company, .I am herefor you to give you advice and to do your web site Iam webdeveloper TUDIED at Taiz univeristy worked at lamas company   lamas compan I am here "
    });
})