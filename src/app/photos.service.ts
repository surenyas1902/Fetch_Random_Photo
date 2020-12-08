import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RandomPhotoResponse {
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient: HttpClient) { }

  getPhoto() {
    return this.httpClient.get<RandomPhotoResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID lfetwePiPv4WDxHuev_bHyIJRMn62KpXwPcW0JMbIfE'
      }
    });
  }
}
