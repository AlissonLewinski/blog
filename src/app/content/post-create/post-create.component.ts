import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  post: Post = {
    id: 0,
    title: '',
    image: '',
    description: '',
    category_id: null,
    content: '',
    is_private: false
  }

  mode: 'create' | 'edit' = 'create'

  isCreatingCategory: boolean = false

  postSecret: string = ''

  uploadedImage: any = null
  reader: FileReader = new FileReader()

  constructor(private postsService: PostsService, private router: Router, private route: ActivatedRoute) {
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id')

      if (id) {
        this.postsService.getById(parseInt(id)).subscribe((res: Post) => {
          this.post = res
          this.mode = 'edit'
        })
      }

    })

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
    this.postsService[this.mode](this.post).subscribe(() => {
      this.router.navigate(['/posts'])
    })
  }
}
