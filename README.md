# mlb-stats

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### Moving from fake data to real data
By default, the application will load 'fake' data (IN THE WORKS).  This is to allow others to work on the application if they don't have an account with MySportsFeeds.com. 

If you want to create an account with them and get an API token/password for their non-commercial feeds, then here are the steps to update the application to use them.  

1. Create a ".env.local" file in the root directory.
2. In this file, add 2 key/value pairs, one for the API token, one for the password.  It should look like this:
```
VUE_APP_MySportsFeeds_APITOKEN=<YOURTOKENHERE>
VUE_APP_MySportsFeeds_PASSWORD=<YOURPASSWORDHERE>
```
3. Comment out the following line of code
