import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateCommentsComponent } from "./create-comments/create-comments.component";
import { SearchBoxComponent } from "./youtube/search-box/search-box.component";

const routes: Routes = [
   // { path: 'search', component: SearchBoxComponent },
    { path: 'add', component: CreateCommentsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }