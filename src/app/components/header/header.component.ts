import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasketItem } from 'src/app/interfaces/basket-item';
import { BasketService } from 'src/app/services/basket.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	public basket$: Observable<IBasketItem[]> = this.basketService.basket$;

	constructor(private basketService: BasketService) {}
}
