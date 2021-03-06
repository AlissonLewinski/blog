import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input('post')
  post: Post = {
    title: '',
    image: '',
    description: '',
    category_id: null,
    content: '',
    is_private: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
