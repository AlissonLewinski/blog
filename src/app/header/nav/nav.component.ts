import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  hasSecret: boolean = false

  constructor(private authService: AuthService) {
    this.authService.hasSecret.subscribe((hasSecret: boolean) => {
      this.hasSecret = hasSecret
    })
  }

  ngOnInit(): void {
  }

}
