System.config({
	map: {
		ts: 'ts',
	},
	packages: {
		ts: {
			format: 'register',
			defaultExtension: 'js',
		},
	}
});

var ELECTRON_DETECTED  = (window && window.process && window.process.type) == "renderer";

if (ELECTRON_DETECTED) {
	console.log("Electron Version");
	System.set('electron', System.newModule(require('electron')));
} else {
	console.log("Web Version");
	System.set('electron', System.newModule({dummy: true}));
}

System.import('ts/boot')
			.then(null, console.error.bind(console));
