const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const multer = require('multer');

//INICIANDO SERVIDOR
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado. (http://localhost:${PORT}/) !`);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


//index
app.get("/", (req, res) => {
  res.send ("PAGINA PRINCIPAL");
});



// _____  _    _ _______        _____ 
// |  __ \| |  | |__   __|/\    / ____|
// | |__) | |  | |  | |  /  \  | (___  
// |  _  /| |  | |  | | / /\ \  \___ \ 
// | | \ \| |__| |  | |/ ____ \ ____) |
// |_|  \_\\____/   |_/_/    \_\_____/ 
                                    

var clientes = require('./routes/clientes');
app.use('/api/clientes', clientes);

var cliente = require('./routes/cliente');
app.use('/api/cliente', cliente);

var data = require('./routes/data');
app.use('/api', data);


var datt2 = new Date('2022-04-12T01:32:32.398Z')

console.log(datt2.getHours());
console.log(datt2.getMinutes());

console.log(datt2);


let storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, './subidas')
  },
  filename:(req, file, cb)=>{
    cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

app.post('/subir', upload.single('demo'), (req, res)=>{
  console.log(`Storage location is ${req.hostname}/${req.file.path}`);
  return res.send(req.file);
})