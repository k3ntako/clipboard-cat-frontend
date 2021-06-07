# Getting Started with Create React App

CopyCat is a webapp that allows users to share text and files (currently in development).

This repo hosts the code for CopyCat's frontend website. You can find the backend code in the [k3ntako/copy-cat-api](https://github.com/k3ntako/copy-cat-api) repo.

Production Website: <http://copy-cat-frontend-prod.k3ntako.com.s3-website-us-east-1.amazonaws.com/>

## Requirements

- Node >= 14

## Run locally

1. Clone this repo

2. Install dependencies
   ```
   $ npm i
   ```
3. Start web server
   ```
   $ npm start
   ```

## Run test

Make sure you have installed the dependencies first.

```
$ npm run test
```

## Deploy to Production

1. npm run build
2. terraform apply
