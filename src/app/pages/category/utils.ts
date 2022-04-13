export function BrandsToString(objBrands: {}): string {
	return Object.entries(objBrands)
		.filter((brand) => brand[1])
		.map((brand) => brand[0])
		.join(',');
}
