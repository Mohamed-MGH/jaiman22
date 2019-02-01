import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/app.mode';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
// @Input()name: string;
name: Observable<User>;
  constructor(private store: Store<User>) {
    this.name = store.select('AppName');
  }

  ngOnInit() {
  }

}
