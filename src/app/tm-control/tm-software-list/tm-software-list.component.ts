import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SoftwareInfo } from 'src/app/aggregations/softwareInfo';

@Component({
  selector: 'app-tm-software-list',
  templateUrl: './tm-software-list.component.html',
  styleUrls: ['./tm-software-list.component.css']
})
export class TmSoftwareListComponent {
  @Input() softwareList: SoftwareInfo[]
  @Output() selectedSoftwareEvent=new EventEmitter<number>()
  // wybrany numer do przesłania do żądania
  selectedSoftware: number = 0

  changeSoftware():void{
    this.selectedSoftwareEvent.emit(this.selectedSoftware)
  }

}
