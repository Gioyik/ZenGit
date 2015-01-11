# ZenGit
A cli to fetch zen streaming from GitHub API.

## Run it
- Install node.js (http://nodejs.org/download/);
- Clone the repo: `$ git clone https://github.com/Gioyik/Zengit`
- Install dependencies: `$ npm install`
- Run the script: `$ ./zengit.js`

If you want it as global binary:

- Install from npm: `npm install -g zengit`
- Run: `$ zengit`

## Example output


## Notes
API limit is 60 requests per hour, if you need expand the limit use your user name as parameter.

```bash
# zengit (installed globally) or ./zengit.js (running from repository)
$ ./zengit Gioyik
Password:
```

You can save the output in a text file:

```bash
# zengit (installed globally) or ./zengit.js (running from repository)
$ zengit > zen
```
