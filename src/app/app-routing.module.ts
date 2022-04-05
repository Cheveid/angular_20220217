import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryModule } from './pages/category/category.module';
import { ProductModule } from './pages/product/product.module';
import { ProductsListModule } from './pages/products-list/products-list.module';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('src/app/pages/products-list/products-list.module').then(
				(m) => m.ProductsListModule,
			),
	},
	{
		path: 'product',
		loadChildren: () =>
			import('src/app/pages/product/product.module').then((m) => m.ProductModule),
	},
	{
		path: 'category',
		loadChildren: () =>
			import('src/app/pages/category/category.module').then((m) => m.CategoryModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes), ProductsListModule, ProductModule, CategoryModule],
	exports: [RouterModule],
})
export class AppRoutingModule {}
