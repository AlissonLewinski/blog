import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreateComponent } from './content/post-create/post-create.component';
import { PostListComponent } from './content/post-list/post-list.component';
import { PostPageComponent } from './content/post-page/post-page.component';
import { PageTitleGuard } from './guards/page-title.guard';

const routes: Routes = [
  {
    path: 'posts',
    component: PostListComponent,
    data: {
      name: 'Postagens'
    },
    canActivate: [PageTitleGuard]
  },
  {
    path: 'new',
    component: PostCreateComponent,
    data: {
      name: 'Nova Postagem'
    },
    canActivate: [PageTitleGuard]
  },
  {
    path: 'posts/:id',
    component: PostPageComponent,
    data: {
      name: 'Postagem' // Will be overwritten by the component after the API returns the post
    },
    canActivate: [PageTitleGuard]
  },
  {
    path: '**',
    redirectTo: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
