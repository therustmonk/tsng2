import {Component} from 'angular2/core';
import {ipcRenderer} from 'electron';

@Component({
	selector: 'home',
	templateUrl: 'home.html',
})

export class HomePage {

	constructor() {
		ipcRenderer.on('asynchronous-reply', (event, arg) => {
			console.log(arg); // prints "pong"
		});
	}

	do_ping() {
		console.log(ipcRenderer.sendSync('synchronous-message', 'sync ping')); // prints "pong"
		ipcRenderer.send('asynchronous-message', 'async ping');
	}

}
