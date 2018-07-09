import { Component } from '@angular/core';
import { toDoInterface } from './toDoInterface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toDoList : toDoInterface[] = []
  doneList: toDoInterface[] = []

  
  newToDo (formData: toDoInterface) {
  
    this.toDoList.push({
      tittle: formData.tittle,
      description: formData.description,
      state: formData.state
    });

  
    console.log(formData)  // returns an object with correct input values
    console.log(this.toDoList) // return an object with tittle:undefined, tittle:undefined
    
  }

  moveToDone (taskData: toDoInterface,i) {
      taskData.state = 'moved';
      this.doneList.unshift(this.toDoList[i])
      this.toDoList.splice(i,1)
    

    console.log(this.doneList)
  
  }
  
}
