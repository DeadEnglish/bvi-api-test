# Body Volume Api Testing

A repo full of tests for the Body Volume API using Jest with Typescript.
<br/>
<br/>

## Setup

no real setup required although a `.env` is required in the root folder structure. See below for an example empty file.

```
API_KEY=
API_URL=
API_KEY_LIMIT_EXCEEDED=
```

## Installation


run `yarn` to install all project dependencies. That's it!
<br/>
<br/>

## Available Scripts


### `yarn test`

Basic jest usage. Runs the tests once. Can add a test file name e.g. `yarn test body-composition` to run a specific file.

### `yarn test:watch`

This allows you to initially run the tests and then watch for any changes to re-run the tests. Can also be used with a file name to run and watch specific files e.g. `yarn test:watch body-composition`
<br/>
<br/>

## Notes

### User Data

the `data.mock.ts` file contains an array or user data that correlates to the images. Currently this is random data used for testing the endpoints but It's made in a way you could add data for the image at the correct array index so you can test the API response for correct data per images.

### Images

When copying the images from the google drive, I removed the `validation` string from the image names. I also noticed that we were either missing some numbers or there wasn't a matching pair of images. To remedy this I re-labelled the following images so that the numbers were in sequence so they were easier to iterate on.

```
validation_43 = 0
validation_42 = 4
validation_41 = 9
validation_40 = 19
```
