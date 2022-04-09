import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { SideMenuComponentModule } from 'src/app/components/side-menu/side-menu.component.module';
import { RatingStarsComponentModule } from 'src/app/components/rating-stars/rating-stars.component.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
	declarations: [CategoryComponent],
	imports: [
		CommonModule,
		CategoryRoutingModule,
		SideMenuComponentModule,
		MatCardModule,
		RatingStarsComponentModule,
		PipesModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		MatInputModule,
		MatCheckboxModule,
		ReactiveFormsModule,
	],
})
export class CategoryModule {}
