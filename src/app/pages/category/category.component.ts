import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, switchMap, tap } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit, AfterViewInit {
	private subCat$ = new BehaviorSubject<string>('avtoelektronika-i-protivougonnye-sistemy');
	form = this.formBuilder.group({
		textControl: [''],
		brandsControl: this.formBuilder.group([]),
	});

	public brands$!: Observable<string[]>;
	public products$!: Observable<IProduct[]>;

	constructor(
		private productService: ProductService,
		private brandService: BrandService,
		private formBuilder: FormBuilder,
	) {}

	ngOnInit(): void {
		this.products$ = combineLatest([
			this.form.get('textControl')?.valueChanges as Observable<string>,
			this.form.get('brandsControl')?.valueChanges as Observable<{}>,
		]).pipe(
			switchMap(([text, objBrands]) =>
				this.productService.getProductsByFilter$({
					subCat: this.subCat$.value,
					text: text,
					brands: Object.entries(objBrands)
						.filter((brand) => brand[1])
						.map((brand) => brand[0])
						.join(','),
				}),
			),
		);

		this.brands$ = this.subCat$.pipe(
			switchMap((subCat) => this.brandService.getBrands$(subCat)),
			tap((brands) => {
				const brandsControl = this.form.get('brandsControl') as FormGroup;

				Object.keys(brandsControl.controls).forEach((key) =>
					brandsControl.removeControl(key, {
						emitEvent: false,
					}),
				);

				brands.forEach((brand, index) => {
					brandsControl.addControl(brand, this.formBuilder.control(false), {
						emitEvent: index === brands.length - 1,
					});
				});
			}),
		);
	}

	ngAfterViewInit(): void {
		this.form.get('textControl')?.updateValueAndValidity();
	}

	onSubCategorySelect(subCategoryId: string) {
		this.subCat$.next(subCategoryId);
	}
}
