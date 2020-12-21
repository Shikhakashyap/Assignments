import { Component, ElementRef } from '@angular/core';
import { VideoDetail } from './youtube/video-detail.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YoutubeSearchService } from './services/youtube-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: VideoDetail[];
  loading: boolean;
  message = '';

  //constructor(private http: HttpClient) { }
  constructor(private youtube: YoutubeSearchService, private el: ElementRef) { }

  //private baseUrl = 'http://localhost:8080/searchbox/api/v1/videodetails';

  updateResults(results: VideoDetail[]): void {
    this.results = results;
    console.log(this.results); //for console output
    //return this.youtube.createVideoDetails(this.results);
    if (this.results.length === 0) {
      this.message = 'Not found...';
    } else {
      this.message = 'Top 10 results:';
    }
  }
}
