import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
import { IProductFilter } from '../interfaces/product-filter';
import { IProductInfo } from '../interfaces/product-info';

@Injectable()
export class ProductService {
	constructor(private http: HttpClient) {}

	getSuggestion$(): Observable<IProduct[]> {
		return this.http
			.get<{ data: { items: IProduct[] } }>('/products/suggestion')
			.pipe(map((data) => data.data.items));
	}

	getProduct$(id: string): Observable<IProductInfo> {
		return this.http
			.get<{ data: IProductInfo }>(`/products/${id}`)
			.pipe(map((data) => data.data));
	}

	getProductsByFilter$(filter: IProductFilter): Observable<IProduct[]> {
		let params = Object.fromEntries(
			Object.entries(filter)
				.filter((value) => value[1])
				.map(([key, value]) => [key, value]),
		);

		return this.http
			.get<{ data: { items: IProduct[] } }>('/products', { params: params })
			.pipe(map((data) => data.data.items));
	}
}
