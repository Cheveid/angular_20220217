import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { products } from 'src/app/mocks/products.mock';

@Component({
	selector: 'app-product-table',
	templateUrl: './product-table.component.html',
	styleUrls: ['./product-table.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableComponent {
	public readonly products: IProduct[] = products;
}
