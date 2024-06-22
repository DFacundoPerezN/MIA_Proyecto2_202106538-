// Creando un servidor con express usndo cors y body-parser
const express = require('express'); //npm install cors
const cors = require('cors'); //npm install cors
const morgan = require('morgan'); //npm install morgan

const app = express();

app.use(express.json({limit: '50MB'}));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json(
    { status: '1',
      Mensaje:'Hello World in Archivos class',
      edited: 'Mensaje editado es enviado desde ejecucion'
    });
});

app.use('/admin', require('./routes/admin.routes'));
app.use('/reception', require('./routes/reception.routes'));
app.use('/users', require('./routes/users.routes'));

module.exports = app;