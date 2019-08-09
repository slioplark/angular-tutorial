import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  max: any;
  min: any;
  form = this.formBuilder.group({
    startDate: [null],
    endDate: [null]
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  onDateChange(event: MatDatepickerInputEvent<any>, controlName: string) {
    if (controlName === 'startDate') { this.min = event.value; }
    if (controlName === 'endDate') { this.max = event.value; }
  }

}
