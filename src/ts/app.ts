import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MainPage} from './main';

@Component({
	selector: 'app',
	templateUrl: 'app.html',
	directives: [ROUTER_DIRECTIVES], 
})

@RouteConfig([
	{path: '/main', name: 'Main', component: MainPage, useAsDefault: true},
])

export class AppComponent {

}
