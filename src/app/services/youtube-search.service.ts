import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { VideoDetail } from '../youtube/video-detail.model';

const YOUTUBE_API_KEY = 'AIzaSyD8nXPQTjis1BGLJvntdchoDcT1KoEcXho';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/searchbox/api/v1/videoDetails';

  search(query: string): Observable<VideoDetail[]> {
    const params: string = [
      `q=${query}`,
      `key=${YOUTUBE_API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${YOUTUBE_API_URL}?${params}`;

    return this.http.get(queryUrl).pipe(map(response => {
      return response['items'].map(item => {
        return new VideoDetail({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        });
      });
    }));
  }

  

   createVideoDetails(videodetails: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, videodetails);
  }

  createComments(comments: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, comments);
  }
}
