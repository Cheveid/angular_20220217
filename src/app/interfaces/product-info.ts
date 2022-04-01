export interface IProductInfo {
	_id: string;
	description: string;
	feedbacks: {
		_id: string;
		product: string;
		advantages: string;
		rate: number;
	}[];
	feedbacksCount: number;
	images: {
		url: string;
		source: string;
	}[];
	name: string;
	price: number;
	rating: number;
	status: number;
	subCategory: string;
	characteristics: {
		title: string;
		items: {
			name: string;
			value: string;
			isExtended: boolean;
		}[];
		isExtended: boolean;
	}[];
	brand: string;
}
