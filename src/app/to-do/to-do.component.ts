import { Component, OnInit } from '@angular/core';
import { toDoInterface } from '../toDoInterface'

@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  toDoList: toDoInterface[] = []
  added = 'added';
  done = 'done'

  constructor() { }

  ngOnInit() {
  }

  newToDo (formData: toDoInterface) {
<<<<<<< HEAD
  
    this.toDoList.push({
      tittle: formData.tittle,
      description: formData.description,
      state: formData.state
 
    });
    console.log(this.toDoList)
=======

    this.toDoList.push(formData);
    console.log(this.toDoList);

>>>>>>> 6066f9c2f7459b293619bc4401d0da2f59d12a0b
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
