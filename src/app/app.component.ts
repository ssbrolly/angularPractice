import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPractice';

  public myData: string = 'hello bitches';

  constructor() {
  }

  whatever(event) {
    console.log(event, event.keyCode);
  }
}
