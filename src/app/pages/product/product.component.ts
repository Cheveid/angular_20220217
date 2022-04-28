import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { IProductInfo } from 'src/app/interfaces/product-info';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-product-page',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
	constructor(
		private productService: ProductService,
		private activatedRoute: ActivatedRoute,
		private basketService: BasketService,
	) {}

	public product$!: Observable<IProductInfo>;

	private id!: string;

	ngOnInit(): void {
		this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;

		this.product$ = this.productService.getProduct$(this.id);
	}

	onAddProductToBasket(event: Event, product: IProduct) {
		event.stopPropagation();
		this.basketService.addProductToBasket(product);
	}
}
