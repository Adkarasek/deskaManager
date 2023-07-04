import { Component, Inject, Input, OnInit } from '@angular/core';
import { SoftwareInfo } from '../aggregations/SoftwareInfo';
import { TmControlService } from '../services/tm-control.service';


@Component({
  selector: 'app-tm-control',
  templateUrl: './tm-control.component.html',
  styleUrls: ['./tm-control.component.css'],
})
export class TmControlComponent implements OnInit{
 loadingStatus = false
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
  statusa: Promise<boolean>;

constructor(private tmControlService:TmControlService){}
  ngOnInit(): void {
    this.status = this.checkStatus()

  }

  changeSoftware(id: number):void{
    this.tmControlService.getTmList(this.address)
  }
  checkStatus(): boolean{
    return this.tmControlService.getStatus(this.address)

  }


}
