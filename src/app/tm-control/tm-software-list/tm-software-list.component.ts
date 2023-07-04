import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SoftwareInfo } from '../../aggregations/SoftwareInfo';

@Component({
  selector: 'app-tm-software-list',
  templateUrl: './tm-software-list.component.html',
  styleUrls: ['./tm-software-list.component.css']
})
export class TmSoftwareListComponent {
  @Input() softwareList: SoftwareInfo[]
  @Output() selectedSoftwareEvent=new EventEmitter<number>()
  // wybrany identyfikator do przesłania do żądania
  selectedSoftware: number = 0


  //event do żądania zmieniającego software na desce
  changeSoftware():void{
    this.selectedSoftwareEvent.emit(this.selectedSoftware)
  }

}
