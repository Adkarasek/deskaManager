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
    address:"192.168.146.91"
  },{
    name: "92",
    address:"192.168.146.92"
  },{
    name: "93",
    address:"192.168.146.93"
  },{
    name: "94",
    address:"192.168.146.94"
  },{
    name: "95",
    address:"192.168.146.95"
  },{
    name: "96",
    address:"192.168.146.96"
  }


  ]
}
