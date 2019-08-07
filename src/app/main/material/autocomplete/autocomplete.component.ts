import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  list$: any;
  formGroup = this.form.group({
    autoControl: [null]
  });

  constructor(
    private http: HttpClient,
    private form: FormBuilder
  ) { }

  ngOnInit() {
    this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/users').subscribe(result => {
      this.list$ = this.formGroup.get('autoControl').valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        map(value => result.filter(item => this.autoCompleteFilter(item.name, value)))
      );
    });
  }

  autoCompleteFilter(item: string, value: string) {
    return item.toLowerCase().includes(value.toLowerCase());
  }

}
