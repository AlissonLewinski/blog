import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { PageTitleService } from '../services/page-title.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  isLoading = LoaderService.isLoading
  routeName = PageTitleService.title

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
