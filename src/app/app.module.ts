import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './youtube/search-box/search-box.component';
import { SearchResultComponent } from './youtube/search-result/search-result.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { CreateCommentsComponent } from './create-comments/create-comments.component';
//import { CreateCommentComponent } from './create-comment/create-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultComponent,
    CreateCommentsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
