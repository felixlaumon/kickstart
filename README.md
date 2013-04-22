# Kickstart

Kickstart is a starter template for building your next web app. It allows you to dive right into writing actual code. Kickstart uses Grunt and Bower and includes LiveReload, LESS, Jade, RequireJS, and JSHint.

## Installation

Kickstart depends on Grunt (>0.4) and Bower.

    git clone https://github.com/felixlaumon/kickstart.git YOUR-APP-NAME
    cd YOUR-APP-NAME
    npm install # This installs the grunt tasks
    bower install # This installs Backbone, Lo-dash and Zepto
    rm -rf .git; git init; # This is to start a new git repo for your app

## Usage

### LiveReload

Run `grunt server`, and a static server will be created at port 9001. The server will refresh your browser if any of the files in `jade`, `styles` and `scripts` folders.

You can customize the port in the `connect` task in Gruntfile.js. You can also add more folders to be watched by appending the `watchedFiles` array in Gruntfile.js.

### Javascript

Kickstarts uses RequireJS to load .js files. So put your .js files inside the `scripts` folder and include them in `scripts/main.js` by `require('your-folder/your-js-file', function () { ... });` Kickstarts can also produce concatenated and minified files with `grunt prod` (See below)

You should install external packages by using Bower. (e.g. Bower )

### LESS

Put your .less files in the `styles` folder. Running `grunt server` will convert the .less files to `dist/app.css` This file can also be minfied with `grunt prod` (See below).

### Jade

Put your .jade files in the `jade` folder. Running `grunt server` will convert the .jade files to `index.html`.

### Concatenating / Minifying Files

First uncomment the app.min.js and app.min.css files in `jade/includes/footer.jade` and `jade/includes/header.jade` respectively. Then comment out `dist/app.css` and `scripts/libs/requirejs/require.js`.

Finally, run `grunt prod` to use the r.js optimizer on `scripts/main.js` and concatenates all its dependencies files. The concatenated file is then minified and saved to `dist/app.min.js` with UgilifyJS. The LESS and Jade files are also minified to `dist/app.css` and `index.html` respectively.
