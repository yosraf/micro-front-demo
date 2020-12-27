import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChildWrapperModule } from './webcomponents/child-wrapper/child-wrapper.module';
import {LazyElementsModule} from '@angular-extensions/elements';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ChildWrapperModule,
    LazyElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
