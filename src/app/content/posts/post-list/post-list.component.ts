import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = []

  ascendingSorting: boolean = false

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getAll().subscribe((res: any) => {
      this.posts = res.posts
    })
  }

  toggleSorting(): void {
    this.ascendingSorting = !this.ascendingSorting
  }

}
