import { Component, Input } from '@angular/core';
import { SoftwareInfo } from '../aggregations/softwareInfo';
import { TmControlService } from '../services/tm-control.service';

@Component({
  selector: 'app-tm-control',
  templateUrl: './tm-control.component.html',
  styleUrls: ['./tm-control.component.css']
})
export class TmControlComponent {
 status: boolean = false
 @Input() name:string
 @Input() address: string
 softwareList: SoftwareInfo[]=

 [
  {
  id:1,
  name: "BM 102 - Łódź"},
  {
  id:2,
  name: "BM 102 - Warszawa"
 }
]



  changeSoftware(id: number):void{
    console.log("strzał", id)

  }


}
