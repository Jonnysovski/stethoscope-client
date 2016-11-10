import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public clock;
  public date = new Date();

  constructor() {
    this.clock = Observable.interval(1000).map(() => new Date());
  }
}
