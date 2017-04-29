import {bindable} from 'aurelia-framework';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr-FR');
export class DatePicker {
	@bindable date;

	constructor() {
		this.days = 31;
		this.months = 12;
	}

	bind() {
		if (this.date) {
			this.day = this.date.date();
			this.month = this.date.month();
			this.year = this.date.year();
		}
	}

	updateDate() {
		this.date = moment([this.year, this.month, this.day]);
	}
}