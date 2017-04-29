import moment from 'moment';
import {ValidationRules} from 'aurelia-validation';

export class Sprint {

	constructor(data) {
		this.celerity = 6;
		this.days = [];
		this.begin = moment();
		this.end = moment(this.begin);
		this.devs = [];

		Object.assign(this, data);
	}
}

ValidationRules
	.ensure('goal').displayName('Sprint goal').required()
	.ensure('id').displayName('ID').required()
	.ensure('begin').displayName('Début').required()
	.ensure('end').displayName('Fin').required()
	.ensure('celerity').displayName('Célérité').satisfies(val => val > 0).required()
	.on(Sprint);