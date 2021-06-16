# Getting Started with Create React App

CopyCat is a webapp that allows users to share text and files (currently in development).

This repo hosts the code for CopyCat's frontend website. You can find the backend code in the [k3ntako/copy-cat-api](https://github.com/k3ntako/copy-cat-api) repo.

Production Website: <http://copy-cat-frontend-prod.k3ntako.com.s3-website-us-east-1.amazonaws.com/>

## Requirements

- Node >= 14

### Deployment Tools

- [Terraform CLI](https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/aws-get-started)

## Run locally

1. Clone this repo

   ```
   $ git clone https://github.com/k3ntako/copy-cat-web.git
   ```

2. Install dependencies
   ```
   $ npm i
   ```
3. Start web server
   ```
   $ npm start
   ```
4. Visit `localhost:3000`

## Run test

Make sure you have installed the dependencies first.

```
$ npm test
```

## Deploy to Production

You will need to [install Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/aws-get-started) to deploy.

1. Assume AWS role.

   - Instructions can be found in the _Assume Role_ section of the [ReadMe](https://github.com/k3ntako/copy-cat-api/blob/main/ReadMe.md) for the CopyCat API repo.

2. Build the site:
   ```
   npm run build
   ```
3. Deploy to S3:
   ```
   terraform apply
   ```
