import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  photoURL: string;
  constructor(private photoService: PhotosService) {
    this.fetchRandom();
   }

  ngOnInit(): void {
  }

  fetchRandom() {
    this.photoService.getPhoto().subscribe((response) => {
      this.photoURL = response.urls.regular;
    });
  }

}
