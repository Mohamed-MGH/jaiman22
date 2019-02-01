import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './model/app.mode';
import * as UserActions from "./actions/app.actions"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jaiman22';
  surname

  constructor(private store: Store<User>){

  }
  onClick(value: User){
      //this.surname = value
      this.store.dispatch(new UserActions.AddName(value))
  }
}
