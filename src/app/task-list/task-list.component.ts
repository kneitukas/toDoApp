import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { toDoInterface } from '../toDoInterface'

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

 @Input() name: toDoInterface;
 @Output() done = new EventEmitter<Event>();


  constructor() { }

  ngOnInit() {
  }

  

  moveToDone(click) {
    this.name.state = 'moved'
    this.done.emit(click);
   

  }

}
