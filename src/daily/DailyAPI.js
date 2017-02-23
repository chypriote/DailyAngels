import {HttpClient} from 'aurelia-http-client';

export class DailyAPI {
	constructor() {
		this.client = new HttpClient();
	}

	getDailys() {
		let vm = this;
		return new Promise(function (resolve, reject) {
			vm.client.get('http://localhost:3000/dailys')
				.then(response => resolve(JSON.parse(response.response)))
				.catch(error => reject(JSON.parse(error)));
		});
	}

	getDaily(id) {
		let vm = this;
		return new Promise(function (resolve, reject) {
			vm.client.get('http://localhost:3000/dailys/' + id)
				.then(response => resolve(JSON.parse(response.response)))
				.catch(error => reject(error));
		});
	}
}