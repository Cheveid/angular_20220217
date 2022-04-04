import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICategory } from '../interfaces/category';

@Injectable()
export class CategoryService {
	constructor(private http: HttpClient) {}

	getCategories$(): Observable<ICategory[]> {
		return this.http.get<{ data: ICategory[] }>('/categories').pipe(map((data) => data.data));
	}
}
