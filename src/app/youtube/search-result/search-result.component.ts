import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeSearchService } from 'src/app/services/youtube-search.service';
import { VideoDetail } from '../video-detail.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() result: VideoDetail;
  

  
  submitted = false;

  constructor(private youtubeSearchService: YoutubeSearchService,
    private router: Router) { }

  ngOnInit() {
  }
  save() {
    this.youtubeSearchService
    .createVideoDetails(this.result).subscribe(data => {
      console.log(data)
      this.result = new VideoDetail();
      //this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  //gotoList() {
    //this.router.navigate(['/result']);
  //}
}
