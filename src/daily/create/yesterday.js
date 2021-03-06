import {bindable} from 'aurelia-framework';

export class Yesterday {
	@bindable items;

	addItem() {
		this.items.push(this.newitem);
		this.newitem = void 0;
	}

	deleteItem(deleted) {
		this.items = this.items.filter(item => item !== deleted);
	}
}