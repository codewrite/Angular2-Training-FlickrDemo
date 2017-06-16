import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FlickrService {

  constructor(private jsonp : Jsonp) { }
  get () {
    var url = [
      "http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=JSONP_CALLBACK"
    ].join('');
    return this.jsonp.get(url).map((res) => res.json());
  }

}
