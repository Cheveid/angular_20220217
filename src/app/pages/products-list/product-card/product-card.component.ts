import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
}
