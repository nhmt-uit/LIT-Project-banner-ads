const express = require('express')
const app = express()
const PORT = process.env.PORT || 80

app.use(express.static('view/image'));
app.use('/', function (req, res) {
    res.sendFile('/view/index.html', { root: '.' });
});

const server = app.listen(PORT, () => {console.log("Server started on http://localhost:"+PORT)})

module.exports = server;