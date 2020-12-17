#!/usr/bin/env node

const package = require('../package.json');

if (package.devDependencies['bourbon-neat'] !== '~1.9') {
    console.error(
        'bourbon-neat 1.9 is required, Wyrm is not compatible with Neat 2.0+.'
    );
    console.error(
        'The expected selector for the bourbon-neat dependency in package.json is "~1.9".'
    );
    process.exit(1);
}
