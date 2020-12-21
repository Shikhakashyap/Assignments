import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from '../comments';
import { YoutubeSearchService } from '../services/youtube-search.service';

@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.css']
})
export class CreateCommentsComponent implements OnInit {

  comments: Comments = new Comments();
  submitted = false;

  constructor(private youtube: YoutubeSearchService,
    private router: Router) { }


  

  ngOnInit() {
  }

  newComments(): void {
    this.submitted = false;
    this.comments = new Comments();
  }

  save() {
    this.youtube
    .createComments(this.comments).subscribe(data => {
      console.log(data)
      this.comments = new Comments();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/add']);
  }
}


