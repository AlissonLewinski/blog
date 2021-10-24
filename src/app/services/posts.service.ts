import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post, PostListParams } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = "https://alissonlewinski-backend.herokuapp.com/posts"

  constructor(private http: HttpClient) { }

  getAll(params: PostListParams): Observable<Post[]> {
    const queryParams = new URLSearchParams(params as any).toString()
    const headers = {
      'Luc-Secret': localStorage.getItem('luc_secret') || ''
    }

    return this.http.get<Post[]>(`${this.baseUrl}?${queryParams}`, {headers})
  }

  getById(id: number): Observable<Post> {
    const headers = {
      'Luc-Secret': localStorage.getItem('luc_secret') || ''
    }

    return this.http.get<Post>(`${this.baseUrl}/${id}`, {headers})
  }

  create(post: Post): Observable<Post> {
    const postSecret = localStorage.getItem('luc_secret')
    
    return this.http.post<Post>(this.baseUrl, {post, postSecret})
  }

  edit(post: Post): Observable<Post> {
    const postSecret = localStorage.getItem('luc_secret')

    return this.http.put<Post>(`${this.baseUrl}/${post.id}`, {post, postSecret})
  }
}
