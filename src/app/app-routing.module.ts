import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('src/app/pages/products-list/products-list.module').then(
				(m) => m.ProductsListModule,
			),
		pathMatch: 'full',
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
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
