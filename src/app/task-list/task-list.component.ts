import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { toDoInterface } from '../toDoInterface'

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

 @Input() name: toDoInterface;
 @Output() done = new EventEmitter<toDoInterface>();
 @Output() delete = new EventEmitter<toDoInterface>()


  constructor() { }

  ngOnInit() {
  }

  disableDoneButton() {
    if (this.name.state === 'done') {
      return false
    } 
    return true
  }

  moveToDone(click) {
    this.name.state = 'done'
    this.done.emit(click);
   
  }

  deleteToDo(click) {
    this.delete.emit(click)

    console.log(click)
  }

}
