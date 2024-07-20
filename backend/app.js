const express = require('express');
const cors = require('cors');
const database = require('./database/db');

const app = express();

app.use(express.json());
app.use(cors());
require('dotenv').config();




// app.post('/quotes/add', async function (req, res) {
//     try {
//         const db = await database();
//         let collection = await db.collection('quotes');
//         let response = await collection.insertMany(quotes)
//         res.json(response)
//     }
//     catch (err) {
//         console.log(err);
//     }
// })

app.post('/quotes', async function (req, res) {
    try {
        console.log('quoetes');
        const db = await database();
        let collection = await db.collection('quotes');
        let response = await collection.find({ category: req.body.uniqueId }).toArray();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
    }
});

app.post('/like', async function (req, res) {
    try {
        const db = await database();
        let collection = await db.collection('user-liked');
        let response = await collection.insertOne(req.body);

        console.log(response)
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
    }
});

app.post('/unlike', async function (req, res) {
    try {
        const db = await database();
        let collection = await db.collection('user-liked');
        let response = await collection.deleteMany(req.body);

        console.log(response)
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
    }
});

app.post('/liked/list', async function (req, res) {
    try {
        const db = await database();
        let collection = await db.collection('user-liked');
        let response = await collection.find().toArray();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
    }
});

app.post('/register', async function (req, res) {
    try {
        const db = await database();
        let collection = await db.collection('users');
        let response = await collection.insertOne(req.body);
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
    }
});

app.post('/register', async function (req, res) {
    try {
        const db = await database();
        let collection = await db.collection('users');
        let response = await collection.updateSearchIndex(req.body);
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
    }
});

app.post('/login', async function (req, res) {
    try {
        console.log(req.body);
        const db = await database();
        let collection = await db.collection('users');
        let response = await collection.findOne({ email: req.body.email });
        console.log(response);
        if (response.email === req.body.email && response.password === req.body.password) {
            res.status(200).json({ 'status': "success", name: response.name, email: response.email, password: response.password, id: response["_id"] })
        }
        else {
            res.status(200).json({ 'status': "failure" })
        }
    }
    catch (err) {
        console.log(err);
    }
});


app.listen(3006, () => {
    console.log('Server is running on port ' + 3006);
});
