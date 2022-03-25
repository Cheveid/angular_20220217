import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { PricePipe } from './pipes/price.pipe';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ProductCardComponent,
		ProductTableComponent,
		SideMenuComponent,
		ProductPageComponent,
		RatingStarsComponent,
		PricePipe,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatGridListModule,
		MatExpansionModule,
		MatTabsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
