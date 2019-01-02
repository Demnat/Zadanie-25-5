var express = require('express');
var app = express();

// app.use(express.static('assets'));  // dlaczego dopóki tego nie zakomentowałam a zakomentowałam linie dotyczące formularza i dodałam hello world pojawia się dalej formularz?

app.use('/store',function(req, res, next){
    console.log('Hej, jestem pośrednikiem żądaniu do /store!');
    next();
});

app.get('/', function (req, res) {
    // res.sendFile('/index.html')
    res.send('Hello world');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

// app.get('/userform', function (req, res) {
//     const response = {
//         first_name: req.query.first_name,
//         last_name: req.query.last_name
//     };
//     res.end(JSON.stringify(response));
// });

var server = app.listen(2000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});