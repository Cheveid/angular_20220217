import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { RatingStarsComponentModule } from 'src/app/components/rating-stars/rating-stars.component.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [BasketComponent],
	imports: [
		CommonModule,
		BasketRoutingModule,
		MatCardModule,
		MatProgressSpinnerModule,
		RatingStarsComponentModule,
		PipesModule,
		MatButtonModule,
		MatInputModule,
	],
})
export class BasketModule {}
