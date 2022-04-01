import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { categories } from 'src/app/mocks/categories.mock';

@Component({
	selector: 'app-side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
	public readonly categories: ICategory[] = categories;
}
