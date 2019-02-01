import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../model/app.mode';
import { Observable } from 'rxjs/Observable';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  //@Input()name: string
  name: Observable<User>
  constructor(private store: Store<User>) { 
    this.name = store.select('AppName')
   

  }


  ngOnInit() {
  }

}
