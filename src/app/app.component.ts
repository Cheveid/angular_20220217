import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICarouselMainPage } from './interfaces/carousel-main-page';
import { carouselMainPage } from './mocks/carousel-main-page.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	title = 'angular_20220217';

	carouselData: ICarouselMainPage[] = carouselMainPage;
}
