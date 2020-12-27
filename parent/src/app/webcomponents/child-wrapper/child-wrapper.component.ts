import {Component, Input} from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-child-wrapper',
  templateUrl:'./child-wrapper.component.html',
  styles: []
})
export class ChildWrapperComponent {
  link: string = environment.childUrl;
  @Input() data: string;
  

}