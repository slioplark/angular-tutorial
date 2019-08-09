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

  users$: any;
  todos$: any;
  form = this.formBuilder.group({
    user: [null],
    todo: [null]
  });

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getTodos();
  }

  displayUserFn(item) {
    return item ? item.name : undefined;
  }

  displayTodoFn(item) {
    return item ? item.title : undefined;
  }

  onClickClear(controlName: string) {
    this.form.get(controlName).patchValue('');
  }

  getUsers() {
    this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/users').subscribe(result => {
      this.users$ = this.form.get('user').valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        map(value => typeof value === 'string' ? value : value.name),
        map(value => result.filter(item => this.autocompleteFilter(item.name, value)))
      );
    });
  }

  getTodos() {
    this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/todos').subscribe(result => {
      this.todos$ = this.form.get('todo').valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        map(value => typeof value === 'string' ? value : value.title),
        map(value => result.filter(item => this.autocompleteFilter(item.title, value)))
      );
    });
  }

  autocompleteFilter(item: string, value: string) {
    return item.toLowerCase().includes(value.toLowerCase());
  }

}
