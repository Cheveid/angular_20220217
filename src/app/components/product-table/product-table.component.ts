import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-product-table',
	templateUrl: './product-table.component.html',
	styleUrls: ['./product-table.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableComponent implements OnInit {
	constructor(@Inject(ProductService) private productService: ProductService) {}

	public products$!: Observable<IProduct[]>;

	ngOnInit(): void {
		this.products$ = this.productService.getSuggestion$();
	}
}
