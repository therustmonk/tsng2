import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomePage} from './home';

@Component({
	selector: 'app',
	templateUrl: 'app.html',
	directives: [ROUTER_DIRECTIVES], 
})

@RouteConfig([
	{path: '/home', name: 'Home', component: HomePage, useAsDefault: true},
])

export class AppComponent {

}
