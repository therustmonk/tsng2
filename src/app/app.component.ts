import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { HomePageComponent } from './homepage.component';

@Component({
	selector: 'app',
	templateUrl: './app/app.html',
	directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
	{path: '/homepage', name: 'Home', component: HomePageComponent, useAsDefault: true},
])

export class AppComponent { }
