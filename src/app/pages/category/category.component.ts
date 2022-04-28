import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
	BehaviorSubject,
	combineLatest,
	distinctUntilChanged,
	map,
	Observable,
	switchMap,
	tap,
} from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';
import { brandsToString } from 'src/app/pages/category/utils';
import { BasketService } from 'src/app/services/basket.service';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit, AfterViewInit {
	private subCat$ = new BehaviorSubject<string>('');
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
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private basketService: BasketService,
	) {}

	ngOnInit(): void {
		this.products$ = combineLatest([
			this.form.get('textControl')?.valueChanges as Observable<string>,
			this.form.valueChanges.pipe(
				map(() => this.form.get('brandsControl')),
				distinctUntilChanged(),
				switchMap(() => (this.form.get('brandsControl') as FormGroup).valueChanges),
			),
		]).pipe(
			switchMap(([text, objBrands]) =>
				this.productService.getProductsByFilter$({
					subCat: this.subCat$.value,
					text: text,
					brands: brandsToString(objBrands),
				}),
			),
		);

		this.brands$ = this.subCat$.pipe(
			switchMap((subCat) => this.brandService.getBrands$(subCat)),
			tap((brands) => {
				this.form.setControl(
					'brandsControl',
					this.formBuilder.group(
						brands.reduce(
							(accumBrands, brand) => ({
								...accumBrands,
								[brand]: false,
							}),
							[],
						),
					),
				);

				this.form.get('brandsControl')?.updateValueAndValidity();
			}),
		);

		this.subCat$.next(this.activatedRoute.snapshot.paramMap.get('id') as string);
	}

	ngAfterViewInit(): void {
		this.form.get('textControl')?.updateValueAndValidity();
	}

	onSubCategorySelect(subCategoryId: string) {
		this.subCat$.next(subCategoryId);

		this.router.navigate(['category', subCategoryId]);
	}

	onAddProductToBasket(event: Event, product: IProduct) {
		event.stopPropagation();
		this.basketService.addProductToBasket(product);
	}
}
