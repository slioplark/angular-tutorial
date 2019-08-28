import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-tutorial';
  isToggle: boolean;

  onSendToggle(event: boolean) {
    this.isToggle = event;
  }

}
