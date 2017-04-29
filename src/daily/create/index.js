import {inject, NewInstance} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Daily} from '../../Entity/Daily';
import {DailyAPI} from '../DailyAPI';
import {SprintAPI} from '../../sprint/SprintAPI';
import {ValidationController} from 'aurelia-validation';

@inject(Router, NewInstance.of(ValidationController))
export class Create {

	constructor(router, controller) {
		this.daily = new Daily();
		this.router = router;
		this.controller = controller;
		this.sprints = [];

		let api = new SprintAPI();

		api.getSprints()
			.then(response => this.sprints = response)
			.catch(error => console.warn(error));
	}

	saveDaily() {
		let vm = this;

		vm.controller.validate()
			.then(result => {
				if (result.valid) {
					let daily = Object.assign({}, vm.daily);
					daily.sprint_id = daily.sprint.id;
					daily.sprint = null;

					let api = new DailyAPI();
					api.postDaily(daily)
						.then(response => vm.router.navigateToRoute('dailyDetails', {id: response.id}))
						.catch(error => console.warn(error));

				} else {
					vm.errors = result.results.filter(el => !el.valid);
				}
			});
	}
}
