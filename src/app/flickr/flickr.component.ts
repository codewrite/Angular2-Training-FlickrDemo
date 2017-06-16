import { Component, OnInit } from '@angular/core';
import { FlickrService } from './../flickr.service';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.css'],
  providers: [FlickrService]
})
export class FlickrComponent implements OnInit {
  images
  constructor(public flickr: FlickrService) {
    var vm = this;
    this.flickr.get()
      .subscribe(data => {
      this.images = data.items;
      });
   }

  ngOnInit() {
  }

}
