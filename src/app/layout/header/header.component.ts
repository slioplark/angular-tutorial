import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sendToggle = new EventEmitter<boolean>();

  isToggle: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClickToggle() {
    this.isToggle = !this.isToggle;
    this.sendToggle.emit(this.isToggle);
  }

}
