import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  title: any = ''
  image: string = ''
  content: any = ''

  constructor() { }

  ngOnInit(): void {
  }

  onContentChanged(event: any) {
    this.content = event.html
  }

  log() {
    console.log('sd');
    console.log(this.content);
  }
}
