import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/models/post.model';
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
    content: '',
    category_id: null
  }

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id: number = parseInt(params.get('id') as string)

      this.postsService.getById(id).subscribe((res: Post) => {
        this.post = res
        PageTitleService.title.next(res.title)
      })
    })
  }

}
