import {inject, NewInstance} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Daily} from '../../Entity/Daily';
import {DailyAPI} from '../DailyAPI';
import {ValidationController} from 'aurelia-validation';

@inject(Router, NewInstance.of(ValidationController))
export class Create {

	constructor(router, controller) {
		this.daily = new Daily();
		this.router = router;
		this.controller = controller;
	}

	saveDaily() {
		let vm = this;

		vm.controller.validate()
			.then(result => {
				if (result.valid) {

					let api = new DailyAPI();
					api.postDaily(vm.daily)
						.then(response => vm.router.navigateToRoute('dailyDetails', {id: response.id}))
						.catch(error => console.warn(error));

				} else {
					vm.errors = result.results.filter(el => !el.valid);
				}
			});
	}
}
