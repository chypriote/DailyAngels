import _ from 'underscore';

export class Graph {

	constructor(data) {
		this.calculated = false;

		this.expected = {};
		this.current = {};

		this.options = {
			legend: {
				position: 'bottom'
			}
		};

		this.display = {
			labels: [],
			datasets: []
		};
		Object.assign(this, data);
	}

	generateExpectedData(data) {
		this.expected = {
			label: 'Prevision',
			borderColor: "rgba(75,192,192,1)",
			backgroundColor: this.gradient,
			data: [],
			fill: false
		};
		this.expected.data = data;
		this.regenerate();
	}
	generateCurrentData(data) {
		this.current = {
			label: 'Actuel',
			borderColor: "rgba(255,100,100,1)",
			backgroundColor: "rgba(255,100,100,0.4)",
			data: [],
			fill: false
		};
		this.current.data = data;
		this.regenerate();
	}
	setLabels(labels) {
		this.labels = labels;
		this.regenerate();
	}

	regenerate() {
		let datasets = [];
		if (!_.isEmpty(this.current)) {
			datasets.push(this.current);
		}
		if (!_.isEmpty(this.expected)) {
			datasets.push(this.expected);
		}

		this.display = {
			labels: this.labels,
			datasets: datasets
		};
	}
}
