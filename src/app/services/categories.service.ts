import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl = "https://alissonlewinski-backend.herokuapp.com/categories"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl)
  }

  create(category: Category): Observable<Category> {
    const postSecret = localStorage.getItem('luc_secret')

    return this.http.post<Category>(this.baseUrl, {category, postSecret})
  }
}
