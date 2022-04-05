import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { SideMenuComponentModule } from 'src/app/components/side-menu/side-menu.component.module';
import { ProductTableComponent } from 'src/app/pages/products-list/product-table/product-table.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RatingStarsComponentModule } from 'src/app/components/rating-stars/rating-stars.component.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ProductsListComponent, ProductTableComponent, ProductCardComponent],
	imports: [
		CommonModule,
		ProductsListRoutingModule,
		MatIconModule,
		MatExpansionModule,
		MatProgressSpinnerModule,
		MatGridListModule,
		MatCardModule,
		RatingStarsComponentModule,
		DirectivesModule,
		PipesModule,
		MatButtonModule,
		SideMenuComponentModule,
	],
})
export class ProductsListModule {}
