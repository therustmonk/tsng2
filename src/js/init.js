System.config({
	map: {
		ts: '/ts',
	},
	packages: {
		ts: {
			format: 'register',
			defaultExtension: 'js',
		}
	}
});
System.import('ts/boot')
			.then(null, console.error.bind(console));
