import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
	{
		path: 'basket',
		loadChildren: () =>
			import('src/app/pages/basket/basket.module').then((m) => m.BasketModule),
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
