import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Sidebar {
	constructor(router) {
		this.router = router;
	}

}