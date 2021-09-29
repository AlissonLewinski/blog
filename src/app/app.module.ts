import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './header/nav/nav.component';
import { TitleComponent } from './header/title/title.component';
import { ImageComponent } from './header/image/image.component';
import { PostCreateComponent } from './content/posts/post-create/post-create.component';
import { PostListComponent } from './content/posts/post-list/post-list.component';
import { PostItemComponent } from './content/posts/post-list/post-item/post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    PostListComponent,
    PostItemComponent,
    PostCreateComponent,
    NavComponent,
    TitleComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
