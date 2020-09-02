const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const AngularElementName = 'card-element';
    
    const files = [
        './dist/angular-elements/runtime-es2015.js',
        './dist/angular-elements/polyfills-es2015.js',
        './dist/angular-elements/main-es2015.js'
    ];

    await fs.ensureDir('elements');
    await fs.ensureDir(`elements/${AngularElementName}`);
    await concat(files, `elements/${AngularElementName}/${AngularElementName}.js`);
})()