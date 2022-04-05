import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { IProductFilter } from 'src/app/interfaces/product-filter';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit {
	filter: IProductFilter = {
		subCat: 'avtoelektronika-i-protivougonnye-sistemy',
		brands: '',
	} as IProductFilter;

	public brands$!: Observable<string[]>;
	public products$!: Observable<IProduct[]>;

	constructor(private productService: ProductService, private brandService: BrandService) {}

	ngOnInit(): void {
		this.brands$ = this.brandService.getBrands$(this.filter.subCat);
		this.products$ = this.productService.getProductsByFilter$(this.filter);
	}

	onSubCategorySelect(subCategoryId: string) {
		this.filter.subCat = subCategoryId;

		this.brands$ = this.brandService.getBrands$(this.filter.subCat);
		this.products$ = this.productService.getProductsByFilter$(this.filter);
	}

	onTextChange(event: Event) {
		this.filter.text = (event.target as HTMLInputElement).value;

		this.products$ = this.productService.getProductsByFilter$(this.filter);
	}

	onBrandChange(checkBox: MatCheckboxChange) {
		if (checkBox.checked) {
			this.filter.brands += (this.filter.brands ? ',' : '') + checkBox.source.value;
		} else {
			this.filter.brands = this.filter.brands
				.split(',')
				.filter((brand) => brand != checkBox.source.value)
				.join(',');
		}

		this.products$ = this.productService.getProductsByFilter$(this.filter);
	}
}
