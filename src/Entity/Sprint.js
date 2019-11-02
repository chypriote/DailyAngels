import moment from 'moment';
import {ValidationRules} from 'aurelia-validation';
import _ from 'underscore';

export class Sprint {

	constructor(data) {
		this.celerity = 6;
		this.days = [];
		this.begin = moment();
		this.end = moment(this.begin);
		this.devs = [];

		Object.assign(this, data);
	}

	/*
	** Returns the total of points available during this sprint
	*/
	getSprintTotal() {
		let total = 0;

		for (let i = 0; i < this.days.length; i++) {
			let today = 0;
			_.each(this.devs, dev => today += dev.workdays[i]);
			total += today * this.celerity;
		}
		return total;
	}

	/*
	** Generates the datas of expected points for this sprint
	*/
	getExpectedDatas() {
		let total = this.getSprintTotal();

		let expected = [total];
		for (let i = 0; i < this.days.length; i++) {
			let today = 0;
			_.each(this.devs, dev => today += dev.workdays[i]);

			expected[i + 1] = expected[i] - today * this.celerity;
		}

		return expected;
	}

	/*
	** Generates graph labels from this sprint's days
	*/
	getSprintLabels() {
		let labels = ['Début'];

		_.each(this.days, day => labels.push(moment(day).format('ddd D')));

		return labels;
	}

}

ValidationRules
	.ensure('goal').displayName('Sprint goal').required()
	.ensure('id').displayName('ID').required()
	.ensure('begin').displayName('Début').required()
	.ensure('end').displayName('Fin').required()
	.ensure('celerity').displayName('Célérité').satisfies(val => val > 0).required()
	.on(Sprint);