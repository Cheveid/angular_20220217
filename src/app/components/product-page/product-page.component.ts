import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProductInfo } from 'src/app/interfaces/product-info';
import { productInfo } from 'src/app/mocks/product-info.mock';

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent {
	public readonly product: IProductInfo = productInfo;
}
