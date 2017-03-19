import {Sprint} from '../../Entity/Sprint';
import {Graph} from '../../Entity/Graph';
import {SprintAPI} from '../SprintAPI';

export class SprintDetails {

	constructor() {
		this.graph = new Graph();
	}

	activate(params, routeConfig) {
		this.routeConfig = routeConfig;
		let api = new SprintAPI();
		let vm = this;

		api.getSprint(params.id)
			.then(response => {
				vm.sprint = new Sprint(response);
				vm.routeConfig.navModel.setTitle('Sprint #' + vm.sprint.id);
				console.log(vm.sprint);

				api.getSprintDailys(params.id).then(response => {
					vm.sprint.dailys = response;
				})
				.catch(error => console.warn(error));

				vm.graph.setLabels(vm.sprint.getSprintLabels());
				vm.graph.generateExpectedData(vm.sprint.getExpectedDatas());

			})
			.catch(error => console.warn(error));
	}
}