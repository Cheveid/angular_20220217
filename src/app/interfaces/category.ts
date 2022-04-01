export interface ICategory {
	_id: string;
	name: string;
	subCategories: {
		_id: string;
		name: string;
		category: string;
	}[];
}
