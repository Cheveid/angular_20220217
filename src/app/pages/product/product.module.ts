import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { RatingStarsComponentModule } from 'src/app/components/rating-stars/rating-stars.component.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ProductComponent],
	imports: [
		CommonModule,
		ProductRoutingModule,
		RatingStarsComponentModule,
		DirectivesModule,
		PipesModule,
		MatCardModule,
		MatIconModule,
		MatTabsModule,
		MatProgressSpinnerModule,
		MatButtonModule,
	],
})
export class ProductModule {}
