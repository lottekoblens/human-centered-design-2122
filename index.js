const express = require(`express`);
const env = require('dotenv')
const app = express();
const PORT = process.env.PORT || 5353;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/juni', (req, res) => {
    res.render('juni');
});

app.get('/dag', (req, res) => {
    res.render('dag');
});


app.use((req, res) => {
    res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});