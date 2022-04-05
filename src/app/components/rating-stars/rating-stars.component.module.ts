import { NgModule } from '@angular/core';
import { RatingStarsComponent } from './rating-stars.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [RatingStarsComponent],
	imports: [MatIconModule],
	exports: [RatingStarsComponent],
})
export class RatingStarsComponentModule {}
