import { Component, OnInit } from '@angular/core';
import { Post } from './posts.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getAll().subscribe((res: any) => {
      this.posts = res.posts
    })
  }

}
