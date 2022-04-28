import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ICarouselMainPage } from 'src/app/interfaces/carousel-main-page';
import { carouselMainPage } from 'src/app/mocks/carousel-main-page.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
	carouselData: ICarouselMainPage[] = carouselMainPage;

	constructor(private router: Router) {}

	onSubCategorySelect(subCategoryId: string) {
		this.router.navigate(['category', subCategoryId]);
	}
}
