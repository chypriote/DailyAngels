import {Metrics} from './Metrics';
import {ValidationRules} from 'aurelia-validation';

export class Daily {

	constructor(data) {
		this.today = [];
		this.yesterday = [];
		this.problems = [];
		this.metrics = new Metrics();
		Object.assign(this, data);
	}
}

ValidationRules
	.ensure('today').displayName('Aujourd\'hui').required()
	.ensure('yesterday').displayName('Hier').required()
	.ensure('sprint_id').displayName('Sprint').required()
	.ensure('date').displayName('Date').required()
	.on(Daily);