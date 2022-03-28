import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Todo} from "./todo";
import {FormControl} from "@angular/forms";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnChanges {

  todos: Todo[] = [];
  content = new FormControl();

  constructor() { }

  ngOnInit(): void {
    console.log(this.content)
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.todos)
  }

  change() {
    const value = this.content.value;
    if (value){
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
      console.log(todo)
    }

  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
