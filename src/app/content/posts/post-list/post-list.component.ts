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
  
  totalPostCount: number = 1
  pageCount: number = 1

  params: PostListParams = {
    page: 1,
    limit: 8,
    direction: 'desc',
    titleSearch: '',
    category_id: null
  }

  constructor(private postsService: PostsService, private categoriesService: CategoriesService) { }

  fetchPosts(): void {
    this.postsService.getAll(this.params).subscribe((res: any) => {
      this.posts = res.posts
      this.totalPostCount = res.total
      this.pageCount = Math.ceil(res.total / this.params.limit)
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

  addToPage(amount: number): void {
    this.params.page += amount
    this.fetchPosts()
  }

  changePage(page: number): void {
    this.params.page = page
    this.fetchPosts()
  }
}
