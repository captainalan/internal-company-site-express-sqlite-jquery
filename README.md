# Employee Data Management Site

This is a full-stack web app built with Node, Express (routing), pug
(templating), jQuery (client-side scripting), and SQLite (database).


## TODO

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

- (None yet)

### SQLite

- Since we have `id` set as INTEGER PRIMARY KEY, will it automatically make new
  unique IDs if I don't explicitely set it?

## Other Notes

- top-bottom linear gradient doesn't display correctly in Brave browser
- For this project, I'm keeping things simple and [avoiding using an
  ORM](https://blog.logrocket.com/why-you-should-avoid-orms-with-examples-in-node-js-e0baab73fa5)
