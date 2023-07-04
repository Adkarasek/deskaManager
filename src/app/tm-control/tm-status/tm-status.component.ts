import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tm-status',
  templateUrl: './tm-status.component.html',
  styleUrls: ['./tm-status.component.css']
})
export class TmStatusComponent {
  @Input() status:boolean
  @Input() name:string
  @Input() loading:boolean
}
