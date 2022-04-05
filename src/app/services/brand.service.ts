import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class BrandService {
	constructor(private http: HttpClient) {}

	getBrands$(subCat: string): Observable<string[]> {
		return this.http
			.get<{ data: string[] }>(`/brands/?subCat=${subCat}`)
			.pipe(map((data) => data.data));
	}
}
