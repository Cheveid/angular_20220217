import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
	selector: 'app-side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit {
	constructor(@Inject(CategoryService) private categoryService: CategoryService) {}

	public categories$!: Observable<ICategory[]>;

	ngOnInit(): void {
		this.categories$ = this.categoryService.getCategories$();
	}
}
