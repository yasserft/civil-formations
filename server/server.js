const express = require('express');
const sequelize = require('./config/database');
const Formation = require('./models/Formation');
const app = express();
const port = 5000;

app.use(express.json());

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Add these routes after the app.get('/', ...) route

app.get('/formations', async (req, res) => {
  try {
    const formations = await Formation.findAll();
    res.json(formations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/formations', async (req, res) => {
  try {
    const formation = await Formation.create(req.body);
    res.status(201).json(formation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/formations/:id', async (req, res) => {
  try {
    const formation = await Formation.findByPk(req.params.id);
    if (formation) {
      await formation.update(req.body);
      res.json(formation);
    } else {
      res.status(404).json({ error: 'Formation not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/formations/:id', async (req, res) => {
  try {
    const formation = await Formation.findByPk(req.params.id);
    if (formation) {
      await formation.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Formation not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
