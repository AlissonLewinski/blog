import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  title: any = ''
  image: any = ''
  content: any = ''

  constructor() { }

  ngOnInit(): void {
  }

  handleImageInputChange(event: any) {
    const image = event.target.files[0]
    
    const reader = new FileReader()
    reader.readAsDataURL(image)

    reader.onload = () => {
      this.image = reader.result      
    }
  }

  onContentChanged(event: any) {
    this.content = event.html
  }
}
