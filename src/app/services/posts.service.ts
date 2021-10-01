import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post, PostListParams } from '../content/posts/post.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = "https://alissonlewinski-backend.herokuapp.com/posts"

  constructor(private http: HttpClient) { }

  getAll(params: PostListParams): Observable<Post[]> {
    const queryParams = new URLSearchParams(params as any).toString();
    
    return this.http.get<Post[]>(`${this.baseUrl}?${queryParams}`).pipe(
      map(obj => obj)
    )
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`).pipe(
      map(obj => obj)
    )
  }

  create(post: Post, postSecret: string | null): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, {post, postSecret}).pipe(
      map(obj => obj)
    )
  }
}
