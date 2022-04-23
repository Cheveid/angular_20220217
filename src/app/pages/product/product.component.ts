import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductInfo } from 'src/app/interfaces/product-info';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-product-page',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
	constructor(private productService: ProductService) {}

	public product$!: Observable<IProductInfo>;

	private id: string = 'kompaktnaa-mys-besprovodnaa-defender-1-mm-605-krasnyj';

	ngOnInit(): void {
		this.product$ = this.productService.getProduct$(this.id);
	}
}
