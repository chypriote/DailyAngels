import {bindable} from 'aurelia-framework';

export class Developpers {
	@bindable days;
	@bindable devs;
	@bindable celerity;

	// We need to set a bind function so the binding takes place before the observator triggers
	bind() {}

	/*
	** Creates an array for each dev with a length corresponding to the number of worked days
	** Note: this will reset the value of every dev's work day to 1
	*/
	daysChanged() {
		let vm = this;
		this.devs.forEach(function (dev) {
			dev.workdays = new Array(vm.days.length).fill(1);
		});
		this.generateWorkTable();
	}

	/*
	** Recalculates the amount of work produced each day, using the dev table's datas and the current celerity
	** For every day, calculate each dev's celerity and add it to the work table
	*/
	generateWorkTable() {
		let vm = this;
		this.workTable = new Array(this.days.length).fill(0);

		this.days.forEach(function (day, id) {
			vm.devs.forEach(function (dev) {
				vm.workTable[id] = parseFloat(vm.workTable[id]) + (parseFloat(dev.workdays[id]) * vm.celerity);
			});
		});
	}

	addDevelopper() {
		this.devs.push({
			'name': null,
			'workdays': new Array(this.days.length).fill(1)
		});
		this.generateWorkTable();
	}

	deleteDevelopper(dev) {
		this.devs = this.devs.filter(el => el.name != dev.name);
		this.generateWorkTable();
	}

}