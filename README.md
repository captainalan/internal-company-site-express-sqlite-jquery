# Employee Data Management Site

## TODO
- [ ] Make generated dates in a consistent string format (consider using a
  library like moment.js)
- [ ] Add POST route for making new employees
    - [ ] Complete `new-employee.pug` form
- [ ] Add a navbar to `layout.pug` for navigating the entire site.
- [x] Display employee names/positions as retrieved from database
- [ ] Add edit button to edit employee data
- [ ] Add honeypot "backdoor" which records user info
    - This page shoudln't be accessed by normal users; log infos of ppl that
      visit it (e.g. with a scraper)

## Questions

### Node/Express

- (None yet)

### SQLite

- Since we have `id` set as INTEGER PRIMARY KEY, will it automatically make new
  unique IDs if I don't explicitely set it?
