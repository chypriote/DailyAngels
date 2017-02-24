import {inject, NewInstance} from 'aurelia-framework';
import {Sprint} from '../../Entity/Sprint';
import {Graph} from '../../Entity/Graph';
import {SprintAPI} from '../SprintAPI';
import moment from 'moment';
import {Router} from 'aurelia-router';
import {ValidationController} from 'aurelia-validation';

@inject(Router, NewInstance.of(ValidationController))
export class Create {

	constructor(router, controller) {
		this.sprint = new Sprint();
		this.graph = new Graph();
		this.router = router;
		this.controller = controller;
	}

	/*
	** Returns an array to be used on our graph, starting with 'begin'
	*/
	generateLabels() {
		let labels = ['Début'];
		this.sprint.days.forEach(function (el) {
			labels.push(moment(el).format('ddd D'));
		});
		return labels;
	}

	/*
	 ** Recalculates the amount of work produced each day, using the dev table's datas and the current celerity
	 ** For every day, calculate each dev's celerity and add it to the work table
	 */
	generateWorkTable() {
		let vm = this;
		let workTable = new Array(this.sprint.days.length).fill(0);

		this.sprint.days.forEach(function (day, id) {
			vm.sprint.devs.forEach(function (dev) {
				workTable[id] = parseFloat(workTable[id]) + (parseFloat(dev.workdays[id]) * vm.sprint.celerity);
			});
		});
		return workTable;
	}

	/*
	** Creates a dataset, starting with the total celerity and substracting each day's celerity going down to 0
	*/
	generateDataset(workTable) {
		let dataset = [];
		let current = 0;
		let totalCelerity = workTable.reduce((pv, cv) => pv+cv, 0);

		workTable.forEach(function (el) {
			dataset.push(totalCelerity - current);
			current += el;
		});
		dataset.push(0);
		return dataset;
	}

	/*
	** Updates our graph with the current datas
	*/
	generateGraph() {
		this.graph.setLabels(this.generateLabels());
		this.graph.generateExpectedData(this.generateDataset(this.generateWorkTable()));
		this.graph.calculated = true;
	}

	/*
	**
	*/
	saveSprint() {
		let vm = this;
		console.log(vm.sprint);

		vm.controller.validate()
			.then(result => {
				console.log(result);
				if (result.valid) {

					let api = new SprintAPI();
					api.postSprint(vm.sprint)
						.then(response => vm.router.navigateToRoute('sprintDetails', {id: response.id}))
						.catch(error => console.warn(error));

				} else {
					vm.errors = result.results.filter(el => !el.valid);
				}
			});
	}
}