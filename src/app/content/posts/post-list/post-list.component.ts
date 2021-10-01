import { Component, OnInit } from '@angular/core';
import { Post, PostListParams } from '../../../models/post.model';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = []

  params: PostListParams = {
    page: 1,
    limit: 8,
    direction: 'desc',
    titleSearch: ''
  }

  constructor(private postsService: PostsService) { }

  fetchPosts(): void {
    this.postsService.getAll(this.params).subscribe((res: any) => {
      this.posts = res.posts
    })
  }

  ngOnInit(): void {
    this.fetchPosts()
  }

  toggleDirection(): void {
    this.params.direction = this.params.direction === 'desc' ? 'asc' : 'desc'
    this.fetchPosts()
  }

}
