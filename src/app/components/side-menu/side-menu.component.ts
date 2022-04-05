import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
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
	constructor(private categoryService: CategoryService) {}

	@Output() subCategorySelect = new EventEmitter<string>();

	public categories$!: Observable<ICategory[]>;
	public selectedSubCategoryId: string = '';

	ngOnInit(): void {
		this.categories$ = this.categoryService.getCategories$();
	}

	onClick(subCategoryId: string) {
		this.subCategorySelect.emit(subCategoryId);
	}
}
