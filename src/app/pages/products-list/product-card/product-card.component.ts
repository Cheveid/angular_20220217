import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	@Input()
	product!: IProduct;

	@Output()
	addProductToBasket = new EventEmitter<IProduct>();

	onAddProductToBasket(event: Event) {
		event.stopPropagation();
		this.addProductToBasket.emit(this.product);
	}
}
