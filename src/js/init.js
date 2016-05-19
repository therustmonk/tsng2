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

System.set('electron', System.newModule(require('electron')));

System.import('ts/boot')
			.then(null, console.error.bind(console));
