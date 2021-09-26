import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../posts.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post')
  post: Post = {title: '', image: '', content: ''}

  constructor() { }

  ngOnInit(): void {
  }

}
