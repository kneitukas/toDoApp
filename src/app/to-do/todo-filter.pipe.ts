import { Pipe, PipeTransform } from '@angular/core';
import { toDoInterface } from '../toDoInterface';

<<<<<<< HEAD
@Pipe({name: 'toDoFilter',pure:false})
export class ToDoFilterPipe implements PipeTransform {
    
    transform(items: toDoInterface[], state:string) {
      
       return  items.filter(item => item.state === state);
        
=======
@Pipe({
  name: 'toDoFilter', pure: false
})
export class ToDoFilterPipe implements PipeTransform {
    transform(items: toDoInterface[], state: string) {
       return items.filter(item => item.state === state);

>>>>>>> 6066f9c2f7459b293619bc4401d0da2f59d12a0b
    }
}
