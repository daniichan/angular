import { Component, OnInit } from '@angular/core';
import { PhotoService } from './Photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  photos: any[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService
      .listFromUser('flavio')
      .subscribe(p => this.photos = p);
  }

}
