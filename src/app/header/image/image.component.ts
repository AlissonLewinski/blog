import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  clickCount: number = 0
  neededClicks: number = 13

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleImageClick() {
    this.clickCount++

    if (this.clickCount === this.neededClicks) {
      this.clickCount = 0

      const postSecret = prompt('Qual a senha? 🧐') || ''
      localStorage.setItem('luc_secret', postSecret)

      this.authService.hasSecret.next(true)
    }
  }

}
