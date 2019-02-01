import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import {  StoreModule} from '@ngrx/store'
import { reducer } from './reducer/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      AppName: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
