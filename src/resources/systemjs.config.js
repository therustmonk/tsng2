System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: './app/',
    '@angular': './libs/@angular',
    'rxjs': './libs/rxjs'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.js',
      defaultExtension: 'js'
    },
    '@angular/core': {
      main: 'core.umd.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'compiler.umd.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'common.umd.js',
      defaultExtension: 'js'
    },
    '@angular/router-deprecated': {
      main: 'router-deprecated.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'platform-browser-dynamic.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'platform-browser.umd.js',
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});

var ELECTRON_DETECTED  = (window && window.process && window.process.type) == "renderer";

if (ELECTRON_DETECTED) {
  console.log("Electron Version");
  System.set('electron', System.newModule(require('electron')));
} else {
  console.log("Web Version");  
  System.set('electron', System.newModule({})); // Makes dummy
}