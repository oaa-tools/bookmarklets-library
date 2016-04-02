## Development Guide - Getting Started

### Go to the parent directory under which a working copy will be created:

  ```$ cd <parent-directory>```

### Create a working copy of the ```bookmarklets-library``` repository

  ```$ git clone --recursive https://github.com/oaa-tools/bookmarklets-library.git```

Note: The repo has a submodule, so be sure to use the ```--recursive``` option.

### Change directory to the working copy

  ```$ cd bookmarklets-library```

### Install ```npm``` package dependencies

  ```$ npm install```

This command follows the directives in the ```package.json``` file.

### Checkout the ```master``` branch of the ```build``` submodule

  ```$ cd build```

  ```$ git checkout master```

Note: If you don't explicitly checkout the ```master``` branch of the submodule, it will remain in a 'detached HEAD' state, which is not what you want if you plan to separately commit and push changes in the submodule.

### Start coding...

  ```$ cd ..```

### Build, using ```webpack```, with the following command

  ```$ npm run build```

See ```package.json``` and ```webpack.config.js``` for more info on what the build will produce.

You can control whether ```webpack``` outputs minified JavaScript by editing the ```package.json``` file:

* ```webpack -p``` # produces minified 'production-ready' output
* ```webpack``` # with no switches outputs non-minified JavaScript for debugging

### Load ```index.html``` in your browser to install the bookmarklets

The links in ```index.html``` point to the updated bookmarklet scripts in the ```build``` subdirectory.
