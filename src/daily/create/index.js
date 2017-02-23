import {Daily} from '../Entity/Daily';

export class Create {

	constructor() {
		this.daily = new Daily();
	}

	saveDaily() {
		console.log(this.daily);
	}
}