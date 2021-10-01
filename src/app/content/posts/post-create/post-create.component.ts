import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

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
