import { Component, OnInit } from '@angular/core';
import { Post } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post: Post = {
    title: '',
    image: '',
    content: ''
  }

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  handleImageInputChange(event: any) {
    const image = event.target.files[0]
    
    const reader = new FileReader()
    reader.readAsDataURL(image)

    reader.onload = () => {
      this.post.image = String(reader.result)  
    }
  }

  onContentChanged(event: any) {
    this.post.content = event.html
  }

  onSave() {
    this.postsService.create(this.post)
  }
}
