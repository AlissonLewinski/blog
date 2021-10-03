import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreateComponent } from './content/posts/post-create/post-create.component';
import { PostListComponent } from './content/posts/post-list/post-list.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostListComponent,
    data: {
      name: 'Postagens'
    }
  },
  {
    path: 'new',
    component: PostCreateComponent,
    data: {
      name: 'Nova Postagem'
    }
  },
  {
    path: '**',
    component: PostListComponent,
    data: {
      name: 'Postagens'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
