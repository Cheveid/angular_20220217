import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBasketItem } from '../interfaces/basket-item';
import { IProduct } from '../interfaces/product';

@Injectable({
	providedIn: 'root',
})
export class BasketService {
	private _basket$ = new BehaviorSubject<IBasketItem[]>([]);

	get basket$(): Observable<IBasketItem[]> {
		return this._basket$.asObservable();
	}

	addProductToBasket(product: IProduct, count: number = 1) {
		this._basket$.next([
			...this._basket$.value.filter((basket) => basket.Product._id !== product._id),
			{
				Product: product,
				Count:
					count +
					(this._basket$.value.find((basket) => basket.Product._id === product._id)
						?.Count ?? 0),
			},
		]);
	}
}
