import {bindable} from 'aurelia-framework';
import moment from 'moment';

moment.locale('fr-FR');

/*
** This component takes the two selected days as input, then selects and display them filtering Saturdays and Sundays
**
** It is not visible right now, but is necessary in order to do the filtering
**
** Later, this component will be used to select/unselect days in order to mark them "non worked"
**
** Right now it fails silently when the end date is before the beginning date, and when the difference between two days is greater than 20 days
*/

export class Calendar {
	@bindable begin;
	@bindable end;
	@bindable days;

	constructor() {
		this.difference = 0;
	}

	// We need to set a bind function so the binding takes place before the observator triggers
	bind() {}

	/*
	** Triggers an update when begin or end are changed
	*/
	endChanged() {
		this.updateCalendar();
	}
	beginChanged() {
		this.updateCalendar();
	}

	/*
	** Given a beginning date and a number, returns an array of moment objects corresponding to every day starting from 'begin' until 'limi' has passed
	** Saturdays and Sundays are filtered from the returned collection
	*/
	getSelectedDays(begin, limit) {
		let items = [];
		for (let i = 0; i <= limit; i++) {
			let item = moment(begin).add(i, 'days');
			if (item.day() < 6 && item.day())
				items.push(item);
		}

		return items;
	}

	/*
	** Recalculates the difference between the two given dates, and selects wether to return an error or a valid table
	*/
	updateCalendar() {
		this.difference = this.end.diff(this.begin, 'days');
		this.error = false;

		if (this.difference > 0 && this.difference < 20) {
			this.days = this.getSelectedDays(this.begin, this.difference + 1);
		} else {
			this.days = [];
			this.error = 'Dates sélectionnées invalides ' + this.difference;
		}
	}
}