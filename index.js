const express = require('express');
const Promise = require('bluebird');
const sqlite = require('sqlite');

const app = express();
const port = process.env.PORT || 3000;
const dbPromise = sqlite.open('foo.db', { Promise });

app.set('view engine', 'pug');

// Must serve static assets (e.g. stylesheets) somewhere
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: "Company Site"
  });
});

// TODO: Add routes to add/modify/delete employees

app.get('/employees', async (req, res, next) => {
  try {
    const db = await dbPromise;
    const employees = await Promise.all([
      db.all('SELECT * FROM employees')
    ]).then((data) => {
      res.render('employees', {
        title: "Employees", 
        employees: data[0] // I think because I used db.all... I have to use 0th index
      });
    });
  } catch (err) {
    next(err); 
  }
});

app.get('/employee/new', async(req, res, next) => {
  // GET route renders teh form 
  res.render('new-employee', {});
});

app.get('/employee/:id', async (req, res, next) => {
  try {
    const db = await dbPromise;
    const employee = await Promise.resolve(
      db.get('SELECT * FROM employees WHERE id = ?', req.params.id)
    );
    res.json(employee);
  } catch (err) {
    next(err);
  }
});


app.listen(port, () => console.log(`App listening on port ${port}`));
