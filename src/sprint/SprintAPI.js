import {HttpClient} from 'aurelia-http-client';

export class SprintAPI {
	constructor() {
		this.client = new HttpClient();
	}

	getSprints() {
		let vm = this;
		return new Promise(function (resolve, reject) {
			vm.client.get('http://localhost:3000/sprints')
				.then(response => resolve(JSON.parse(response.response)))
				.catch(error => reject(error));
		});
	}

	getSprint(id) {
		let vm = this;
		return new Promise(function (resolve, reject) {
			vm.client.get('http://localhost:3000/sprints/' + id)
				.then(response => resolve(JSON.parse(response.response)))
				.catch(error => reject(error));
		});
	}

	postSprint(sprint) {
		let vm = this;
		return new Promise(function (resolve, reject) {
			vm.client.post('http://localhost:3000/sprints', sprint)
				.then(response => resolve(JSON.parse(response.response)))
				.catch(error => reject(error));
		});
	}

	getSprintDailys(id) {
		let vm = this;
		return new Promise(function (resolve, reject) {
			vm.client.get('http://localhost:3000/dailys?sprint_id=' + id)
				.then(response => resolve(JSON.parse(response.response)))
				.catch(error => reject(error));
		});
	}
}
