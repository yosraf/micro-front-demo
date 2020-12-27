import {Component, Input, OnInit, OnChanges,SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styles: []
})
export class SampleComponent  implements OnInit,OnChanges{
  @Input() data: string;
  constructor() {
    
   }
  ngOnChanges(changes: SimpleChanges) {
  }
  ngOnInit() {
  }
}