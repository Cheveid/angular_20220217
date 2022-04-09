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
	private selectedBrands$ = new BehaviorSubject<string>('');
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
			this.subCat$.asObservable(),
			this.form.get('textControl')?.valueChanges as Observable<string>,
			this.selectedBrands$.asObservable(),
		]).pipe(
			switchMap(([subCat, text, brands]) =>
				this.productService.getProductsByFilter$({
					subCat: subCat,
					text: text,
					brands: brands,
				}),
			),
		);

		this.brands$ = this.subCat$.pipe(
			switchMap((subCat) => this.brandService.getBrands$(subCat)),
			tap((brands) => {
				brands.forEach((brand) => {
					const brandsControl = this.form.get('brandsControl') as FormGroup;
					brandsControl.addControl(brand, this.formBuilder.control(false));
				});
				this.form.get('brandsControl')?.valueChanges.subscribe((objBrands) => {
					this.selectedBrands$.next(
						Object.entries(objBrands)
							.filter((brand) => brand[1])
							.map((brand) => brand[0])
							.join(','),
					);
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
