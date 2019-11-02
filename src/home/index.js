import {SprintAPI} from '../sprint/SprintAPI';

export class Index {
	activate() {
		let api = new SprintAPI();
		api.getSprints()
			.then(response => this.sprints = response)
			.catch(error => console.warn(error));
	}
}