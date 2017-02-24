import {bindable} from 'aurelia-framework';

export class Problems {
	@bindable items;

	addItem() {
		this.items.push(this.problem);
		this.problem = void 0;
	}

	deleteItem(deleted) {
		this.items = this.items.filter(item => item !== deleted);
	}
}