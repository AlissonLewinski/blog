import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router, RoutesRecognized } from '@angular/router';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  isLoading = LoaderService.isLoading
  routeName: string | null = null

  constructor(private router: Router) {

    router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        let route = event.state.root.firstChild
        this.routeName = route?.data?.name
      }

    });
  }

  ngOnInit(): void {
  }

}
