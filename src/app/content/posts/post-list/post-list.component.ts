import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { Post, PostListParams } from '../../../models/post.model';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = []
  categories: Category[] = []

  params: PostListParams = {
    page: 1,
    limit: 8,
    direction: 'desc',
    titleSearch: ''
  }

  constructor(private postsService: PostsService, private categoriesService: CategoriesService) { }

  fetchPosts(): void {
    this.postsService.getAll(this.params).subscribe((res: any) => {
      this.posts = res.posts
    })
  }

  fetchCategories(): void {
    this.categoriesService.getAll().subscribe((res: any) => {
      this.categories = res.categories
    })
  }

  ngOnInit(): void {
    this.fetchPosts()
    this.fetchCategories()
  }

  toggleDirection(): void {
    this.params.direction = this.params.direction === 'desc' ? 'asc' : 'desc'
    this.fetchPosts()
  }

}
