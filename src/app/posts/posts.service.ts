import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from './posts.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = "https://alissonlewinski-backend.herokuapp.com/posts"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl).pipe(
      map(obj => obj)
    )
  }

  create(post: Post, postSecret: string | null): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, {post, postSecret}).pipe(
      map(obj => obj)
    )
  }
}
