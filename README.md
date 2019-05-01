# Employee Data Management Site

This is a full-stack web app built with Node, Express (routing), pug
(templating), jQuery (client-side scripting), and SQLite (database).

Basic CRUD operations ~~are~~ will be supported on a table of employees.


## TODO

- [ ] Build a preview/exported/static site to display on Github Pages
- [ ] Make generated dates in a consistent string format (consider using a
  library like moment.js)
- [ ] Add POST route for making new employees
    - [x] Complete `new-employee.pug` form
- [ ] Add PUT route for editing existing employees
- [ ] Add a navbar to `layout.pug` for navigating the entire site.
- [x] Display employee names/positions as retrieved from database
- [ ] Add edit button to edit employee data
- [ ] Add honeypot "backdoor" which records user info
    - This page shoudln't be accessed by normal users; log infos of ppl that
      visit it (e.g. with a scraper)
- [ ] Add **news** table to database which holds company news
    - [ ] Add previews of news stories to homepage

## Questions

### Node/Express

- Are there some well-established tools for building static websites from Express apps?
    - Or, should I just do a little bit of web scraping on my own site...

### SQLite

- Since we have `id` set as INTEGER PRIMARY KEY, will it automatically make new
  unique IDs if I don't explicitely set it?
- SQLite doesn't have a native data type for dates; I'll stick with using
  consistent strings for now...

## Other Notes

- top-bottom linear gradient doesn't display correctly in Brave browser
- For this project, I'm keeping things simple and [avoiding using an
  ORM](https://blog.logrocket.com/why-you-should-avoid-orms-with-examples-in-node-js-e0baab73fa5)

## Other ppl's stuff (besides code/libraries)

- [Sanford Robinson Gifford - Indian Summer in the White Mountains - Google Art Project.jpg](https://commons.wikimedia.org/wiki/File:Sanford_Robinson_Gifford_-_Indian_Summer_in_the_White_Mountains_-_Google_Art_Project.jpg)
- [Heavy industry - Ant Roztsky](https://unsplash.com/photos/SLIFI67jv5k)
