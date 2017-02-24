import {Sprint} from '../../Entity/Sprint';
import {SprintAPI} from '../SprintAPI';

export class SprintDetails {

	activate(params, routeConfig) {
		this.routeConfig = routeConfig;
		let api = new SprintAPI();
		let vm = this;

		api.getSprint(params.id)
			.then(response => {
				vm.sprint = new Sprint(response);
				vm.routeConfig.navModel.setTitle('Sprint #' + vm.sprint.id);
				api.getSprintDailys(params.id).then(response => {
					vm.sprint.dailys = response;
				})
				.catch(error => console.warn(error));
			})
			.catch(error => console.warn(error));

		this.test = {
			labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
			datasets: [
				{
					label: 'Prevision',
					borderColor: "rgba(75,192,192,1)",
					backgroundColor: "rgba(75,192,192,0.4)",
					data: [288 - 6, 288 - 40.5, 288 - 75, 288 - 97.5, 288 - 120, 288 - 160.5, 288 - 201, 288 - 231, 288 - 259.5, 288 - 288],
					fill: false
				},
				{
					label: 'Current',
					borderColor: "rgba(255, 100, 100,1)",
					backgroundColor: "rgba(255, 100, 100,0.4)",
					data: [288 - 0, 288 - 13, 288 - 41, 288 - 71],
					fill: false
				}
			]
		}
		
	}
}