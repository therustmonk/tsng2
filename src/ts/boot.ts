/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../../typings/github-electron/github-electron.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
]);

