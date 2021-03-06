import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-get-camera-bearing',
  templateUrl: 'get-camera-bearing.html',
})
export class GetCameraBearingPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {}

  ionViewDidLoad() {
    setTimeout(this.loadMap.bind(this), 1000);
  }
  loadMap() {
    this.map = this.googleMaps.create('map_canvas', {
      "camera": {
        "target": {
          "lat": 37.422858,
          "lng": -122.085065
        },
        "zoom": 15
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('map is ready');
    })
  }

  onButton_click() {
    // Show the current camera bearing.
    alert("bearing: " + this.map.getCameraBearing());
  }
}
