import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  postSecret: string | null = ''

  constructor(private postsService: PostsService, private router: Router) { }

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
    this.postSecret = prompt('Qual a senha? 🧐')

    this.postsService.create(this.post, this.postSecret).subscribe(() => {
      this.router.navigate(['/posts'])
    })
  }
}
