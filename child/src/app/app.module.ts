import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ApplicationRef } from '@angular/core';
import { AppComponent } from './app.component';
import {SampleModule} from './sample/sample.module';
import { SampleComponent } from './sample/sample.component';
import {createCustomElement} from '@angular/elements';

const local = false;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleModule
  ],
  providers: [],
  bootstrap: [local ? AppComponent : []],
  entryComponents: [SampleComponent],

})
export class AppModule { 
  constructor(private injector: Injector) {
    const micro = createCustomElement(SampleComponent, {injector: this.injector})
    customElements.define('micro-app', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {}
}
