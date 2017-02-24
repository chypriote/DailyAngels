export class CapitalizeValueConverter {
	toView(value) {
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
}