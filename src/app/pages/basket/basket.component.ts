import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasketItem } from 'src/app/interfaces/basket-item';
import { BasketService } from 'src/app/services/basket.service';

@Component({
	selector: 'app-basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent {
	basket$: Observable<IBasketItem[]> = this.basketService.basket$;

	constructor(private basketService: BasketService) {}
}
