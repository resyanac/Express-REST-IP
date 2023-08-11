import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Tracker, transactions } from './interfaces';
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 1010;


dotenv.config();

app.use(bodyParser.json());
// app.use(express.json());
// app.use(app);


// get all
app.get('/', (req: Request, res: Response) => {
    res.send("This is Financial Tracker");
});

// get by 
app.get('/transactions', (req: Request, res: Response): any => {
    res.json({
    message: "success get history of transactions",
    transactions,
  });
});

// get by id
app.get('/transactions/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
    if (transactions) {
        res.json(transactions[id -1]);
    } else {
        res.status(404).json({ message: 'History is not found'});
    }
});

// post
app.post('/transactions', (req: Request, res: Response) => {
  const newTransactions: Tracker = {
    id: transactions.length + 1,
    type: req.body.type,
    recipient: req.body.recipient,
    description: req.body.description,
    amount: req.body.amount,
  };
  transactions.push(newTransactions);
  res.status(201).json(newTransactions);
});

// put
app.put('/transactions/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const transactionsIndex = transactions.findIndex((p) => p.id === id);
  if (transactionsIndex !== -1) {
    const transactionsProduct: Tracker = {
      id,
      type: req.body.type,
      recipient: req.body.recipient,
      description: req.body.description,
      amount: req.body.amount,
    };
    transactions[transactionsIndex] = transactionsProduct;
    res.json(transactionsProduct);
  } else {
    res.status(404).json({ message: 'History is not found!' });
  }
});

// patch
app.patch('/transactions/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const transactionsIndex = transactions.findIndex((p) => p.id === id);
  let tipe = transactions[transactionsIndex].type
  let nama = transactions[transactionsIndex].recipient
  let deskripsi = transactions[transactionsIndex].description
  let harga = transactions[transactionsIndex].amount
  if (transactionsIndex !== -1) {
    if (req.body.type) {
        tipe = req.body.type
    };
    if (req.body.recipient) {
        nama = req.body.recipient
    };
    if (req.body.description) {
        deskripsi = req.body.description
    };
    if (req.body.amount) {
        harga = req.body.amount
    };
      const transactionsProduct: Tracker = {
      id,
      type: tipe,
      recipient: nama,
      description: deskripsi,
      amount: harga,
    };
    transactions[transactionsIndex] = transactionsProduct;
    res.json(transactionsProduct);
  } else {
    res.status(404).json({ message: 'History is not found!' });
  }
});

// delete
app.delete('/transactions/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const transactionsIndex = transactions.findIndex((t) => t.id === id );
  if (transactionsIndex !== -1) {
    const deletedTransaction = transactions.splice(transactionsIndex, 1)[0];
    res.json(deletedTransaction);
  } else {
    res.status(404).json({ message: 'Transaction you are looking for does not exist!' });
  }
});

app.listen(port, (): any => {
    console.log(`Server is running at  http://localhost:${port}`);
});


