const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// rest of your code
const app = express();

app.use(express.json());

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/Sanitary_Ware.sqlite'
});

const Sanitary = sequelize.define('Product', {
    SanitarywareID: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true
    },
    SanitarywareName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SanitarywarePrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SanitarywareType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SanitarywareImg: {
        type: DataTypes.STRING
    }
});

sequelize.sync();

app.get('/Products', (_, res) => {
    Sanitary.findAll().then(sanitary => {
        res.json(sanitary);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/Products/:id',(req,res) => {
    Sanitary.findByPk(req.params.id).then(sanitary => {
        if (!sanitary){
            res.status(404).send('Product not found');
        } else {
            res.json(sanitary);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post('/Products',(req,res) => {
    Sanitary.create(req.body).then(sanitary =>{
        res.send(sanitary);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.put('/Products/:id', (req,res) => {
    Sanitary.findByPk(req.params.id).then(sanitary => {
        if (!sanitary){
            res.status(404).send('Product not found');
        } else {
            sanitary.update(req.body).then(() =>{
                res.send(sanitary);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/Products/:id', (req,res) =>{
    Sanitary.findByPk(req.params.id).then(sanitary => {
        if (!sanitary) {
            res.status(404).send('Product not found');
        } else {
            sanitary.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));