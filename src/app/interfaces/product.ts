export interface IProduct {
	_id: string;
	feedbacksCount: number;
	subCategory: string;
	images: {
		url: string;
		source: string;
	}[];
	name: string;
	price: number;
	rating: number;
	status: number;
}
