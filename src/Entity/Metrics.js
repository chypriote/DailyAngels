import {ValidationRules} from 'aurelia-validation';

export class Metrics {

	constructor(data) {
		Object.assign(this, data);
	}
}

ValidationRules
	.ensure('done').displayName('Done').required()
	.ensure('doing').displayName('Doing').required()
	.ensure('review').displayName('Code review').required()
	.ensure('reviewed').displayName('Reviewed').required()
	.ensure('validation').displayName('Needs validation').required()
	.ensure('blocked').displayName('Bloqués').required()
	.on(Metrics);
