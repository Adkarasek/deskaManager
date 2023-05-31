import { Component } from '@angular/core';
import { TmAddress } from './aggregations/TmAddress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DeskaFront';
  addresses:TmAddress[]=[{
    name: "ubuntu20",
    address:"192.168.49.91"
  },{
    name: "ubuntu18",
    address:"192.168.49.92"
  },{
    name: "ubuntu16",
    address:"192.168.49.93"
  },{
    name: "ubuntu12",
    address:"192.168.49.94"
  }

  ]
}
