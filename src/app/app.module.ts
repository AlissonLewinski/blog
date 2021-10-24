import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './header/nav/nav.component';
import { TitleComponent } from './header/title/title.component';
import { ImageComponent } from './header/image/image.component';
import { PostCreateComponent } from './content/post-create/post-create.component';
import { PostListComponent } from './content/post-list/post-list.component';
import { PostItemComponent } from './content/post-list/post-item/post-item.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { InversePipe } from './pipes/inverse.pipe';
import { CKEditorModule } from 'ckeditor4-angular';
import { CategorySelectCreateComponent } from './content/post-create/category-select-create/category-select-create.component';
import { PostPageComponent } from './content/post-page/post-page.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

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
    ImageComponent,
    PageTitleComponent,
    LoaderComponent,
    InversePipe,
    CategorySelectCreateComponent,
    PostPageComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
