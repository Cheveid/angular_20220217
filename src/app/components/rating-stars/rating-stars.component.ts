import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-rating-stars',
	templateUrl: './rating-stars.component.html',
	styleUrls: ['./rating-stars.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingStarsComponent {
	@Input()
	rating: number = 0;
}
