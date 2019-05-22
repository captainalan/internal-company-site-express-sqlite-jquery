const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const sqlite = require('sqlite');

const app = express();
const port = process.env.PORT || 3000;
const dbPromise = sqlite.open('foo.db', { Promise });

app.set('view engine', 'pug');

// Must serve static assets (e.g. stylesheets) somewhere
app.use(express.static('public'));

// Parse various different custom JSON types as JSON
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index', {
    // No data passed here yet
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    // Nothing to pass now
  });
});

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
  // GET route renders the form 
  res.render('new-employee', {});
});

// Specify employee by ID; later make these paths different from database IDs
// for security purposes...
app.route('/employee/edit/:id')
.get(async(req, res, next) => {
  try {
    const db = await dbPromise;
    const employee = await Promise.resolve(
      db.get('SELECT * FROM employees WHERE id = ?', req.params.id)
    );
    res.render('edit-employee', {
      "employee": employee
    });
  } catch (err) {
    next(err);
  }
  // Display edit form here
})
.put(async(req, res, next) => {
  // On submitting edit form, use put method to update record
  res.send("Updating an employee...");
})
.delete(async(req, res, next) => {
  try {
    const db = await dbPromise;
    await Promise.resolve(
      // Ooooh! dangerous!
      db.run('DELETE FROM employees WHERE id = ?', req.params.id)
    ).then(() => {
			res.redirect(200, 'back');
    });
  } catch (err) {
    // next(err);
    res.send(`error: ${err}`);
  }
});

app.post('/employee/new', async (req, res, next) => {
  console.log("You sent something", req.body);
  res.send("greeting from the server");
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
