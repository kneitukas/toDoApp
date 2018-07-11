import { Component, OnInit, Input, Output,EventEmitter,  } from '@angular/core';
import { toDoInterface } from '../../toDoInterface'
import { Title } from '../../../../node_modules/@angular/platform-browser';


@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {


   @Input()toDoList : toDoInterface[] = []
   @Input()state : string;
   
  constructor() { }

  ngOnInit() {
  // this.toDoList.push({tittle:'1', description:'Added',state:'added'})
  // this.toDoList.push({tittle:'2', description:'Added',state:'added'})
  // this.toDoList.push({tittle:'3', description:'Added',state:'added'})
  // this.toDoList.push({tittle:'4', description:'Done',state:'done'})
  // this.toDoList.push({tittle:'5', description:'Done',state:'done'})
  // this.toDoList.push({tittle:'6', description:'Done',state:'done'})
    console.log(this.toDoList)
  }

  moveToDone(listItem) {
    listItem.state = 'done'
    // this.toDoList.push(listItem,i)
    // this.toDoList.splice(i,1)
    
   console.log(listItem)
  }

  disableDoneButton(state) {
    if (state === 'done') {
      return false
    } 
    return true
  }

 
  deleteToDo(i) {
    this.toDoList.splice(i,1)
  }

}
