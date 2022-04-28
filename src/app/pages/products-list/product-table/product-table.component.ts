import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-product-table',
	templateUrl: './product-table.component.html',
	styleUrls: ['./product-table.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableComponent implements OnInit {
	constructor(private productService: ProductService, private basketService: BasketService) {}

	public products$!: Observable<IProduct[]>;

	ngOnInit(): void {
		this.products$ = this.productService.getSuggestion$();
	}

	addProductToBasket(product: IProduct) {
		this.basketService.addProductToBasket(product);
	}
}
