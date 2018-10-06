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
### Prevent config.js from being checked in
To use the appliation, you'll have to modify the /src/config.js files with API token credentials you'll receive from MySportsFeeds.com.  To preven this file from being commited by Git, run the following command the first time you pull down the repo
```
git update-index --assume-unchanged ./src/config.js
```
