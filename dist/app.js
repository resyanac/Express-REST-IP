"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const interfaces_1 = require("./interfaces");
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const port = process.env.PORT || 1010;
dotenv_1.default.config();
app.use(body_parser_1.default.json());
// app.use(express.json());
// app.use(app);
// get all
app.get('/', (req, res) => {
    res.send("This is Financial Tracker");
});
// get by 
app.get('/transactions', (req, res) => {
    res.json({
        message: "success get history of transactions",
        transactions: interfaces_1.transactions,
    });
});
// get by id
app.get('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (interfaces_1.transactions) {
        res.json(interfaces_1.transactions[id - 1]);
    }
    else {
        res.status(404).json({ message: 'History is not found' });
    }
});
// post
app.post('/transactions', (req, res) => {
    const newTransactions = {
        id: interfaces_1.transactions.length + 1,
        type: req.body.type,
        recipient: req.body.recipient,
        description: req.body.description,
        amount: req.body.amount,
    };
    interfaces_1.transactions.push(newTransactions);
    res.status(201).json(newTransactions);
});
// put
app.put('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const transactionsIndex = interfaces_1.transactions.findIndex((p) => p.id === id);
    if (transactionsIndex !== -1) {
        const transactionsProduct = {
            id,
            type: req.body.type,
            recipient: req.body.recipient,
            description: req.body.description,
            amount: req.body.amount,
        };
        interfaces_1.transactions[transactionsIndex] = transactionsProduct;
        res.json(transactionsProduct);
    }
    else {
        res.status(404).json({ message: 'History is not found!' });
    }
});
// patch
app.patch('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const transactionsIndex = interfaces_1.transactions.findIndex((p) => p.id === id);
    let tipe = interfaces_1.transactions[transactionsIndex].type;
    let nama = interfaces_1.transactions[transactionsIndex].recipient;
    let deskripsi = interfaces_1.transactions[transactionsIndex].description;
    let harga = interfaces_1.transactions[transactionsIndex].amount;
    if (transactionsIndex !== -1) {
        if (req.body.type) {
            tipe = req.body.type;
        }
        ;
        if (req.body.recipient) {
            nama = req.body.recipient;
        }
        ;
        if (req.body.description) {
            deskripsi = req.body.description;
        }
        ;
        if (req.body.amount) {
            harga = req.body.amount;
        }
        ;
        const transactionsProduct = {
            id,
            type: tipe,
            recipient: nama,
            description: deskripsi,
            amount: harga,
        };
        interfaces_1.transactions[transactionsIndex] = transactionsProduct;
        res.json(transactionsProduct);
    }
    else {
        res.status(404).json({ message: 'History is not found!' });
    }
});
// delete
app.delete('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const transactionsIndex = interfaces_1.transactions.findIndex((t) => t.id === id);
    if (transactionsIndex !== -1) {
        const deletedTransaction = interfaces_1.transactions.splice(transactionsIndex, 1)[0];
        res.json(deletedTransaction);
    }
    else {
        res.status(404).json({ message: 'Transaction you are looking for does not exist!' });
    }
});
app.listen(port, () => {
    console.log(`Server is running at  http://localhost:${port}`);
});
