import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { PageTitleService } from 'src/app/services/page-title.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post: Post = {
    title: '',
    image: '',
    description: '',
    category_id: null,
    content: '',
    is_private: false
  }

  isLoading: boolean = true
  
  hasSecret: boolean = false

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private authService: AuthService,
    private loaderService: LoaderService  
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id: number = parseInt(params.get('id') as string)

      this.postsService.getById(id).subscribe((res: Post) => {
        this.post = res
        PageTitleService.title.next(res.title)
      })
    })

    this.loaderService.isLoading.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading
    })

    this.authService.hasSecret.subscribe((hasSecret: boolean) => {
      this.hasSecret = hasSecret
    })
  }

  ngOnInit(): void {
  }

}
