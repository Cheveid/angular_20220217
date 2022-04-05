import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryService } from './services/category.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { BaseInterceptor } from './services/base.interceptor';
import { BrandService } from './services/brand.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		HttpClientModule,
	],
	providers: [
		CategoryService,
		ProductService,
		BrandService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
