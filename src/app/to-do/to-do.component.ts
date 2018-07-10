import { Component, OnInit } from '@angular/core';
import { toDoInterface } from '../toDoInterface'

@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  toDoList : toDoInterface[] = []
  added = 'added';
  done = 'done'
 
  constructor() { }

  ngOnInit() {
  }

  newToDo (formData: toDoInterface) {
  
    this.toDoList.push({
      tittle: formData.tittle,
      description: formData.description,
      state: formData.state
 
    });

  }
    
  // }
  // moveToDone (taskData: toDoInterface,i) {
     
  //     this.doneList.unshift(this.toDoList[i])
  //     this.toDoList.splice(i,1)

  //     console.log(taskData)
  // }

  // delete(deleteData:toDoInterface,i) {
  
  //   if (deleteData.state === "added") {
  //     this.toDoList.splice(i,1)

  //   } else if (deleteData.state === "done") {
  //     this.doneList.splice(i,1)

  //     console.log('netrina')

  //   }

      
  //   console.log(i)
  

}
