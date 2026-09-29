import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.post('/imc', (req, res) => {
  res.send('Vamos calcular o IMC');
  const {nome,idade,peso,altura}= req.body;
  //Higienização de dados
  if(nome || idade === undefined || peso === undefined || altura===undefined){
  return res.status(400).json({
        erro:"Preencha todos os dados."
  });
    /**
     {"nome":'Lian,
      "idade":16,
        "peso":67,
        "altura":1.67
     
     }
     */
  }
});

app.listen(port, () => {
  console.log(`App rodando na Porta : ${port}`);
});