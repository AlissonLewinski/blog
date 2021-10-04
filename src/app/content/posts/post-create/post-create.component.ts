import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { Post } from '../../../models/post.model';
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
    description: '',
    category_id: null,
    content: ''
  }

  isCreatingCategory: boolean = false

  postSecret: string | null = ''

  uploadedImage: any = null
  reader: FileReader = new FileReader()

  constructor(private postsService: PostsService, private router: Router) {

  }

  ngOnInit(): void {
  }

  handleImageInput(event: any) {
    this.uploadedImage = event.target.files[0]
    
    this.reader.readAsDataURL(this.uploadedImage)
    this.reader.onload = () => {
      this.post.image = String(this.reader.result)  
    }
  }

  onSave() {
    this.postSecret = prompt('Qual a senha? 🧐')

    this.postsService.create(this.post, this.postSecret).subscribe(() => {
      this.router.navigate(['/posts'])
    })
  }
}
