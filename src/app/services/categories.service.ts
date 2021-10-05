import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl = "https://alissonlewinski-backend.herokuapp.com/categories"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl).pipe(
      map(obj => obj)
    )
  }

  create(category: Category, postSecret: string): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, {category, postSecret}).pipe(
      map(obj => obj)
    )
  }
}
