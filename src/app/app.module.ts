import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { TaskFormComponent } from './to-do/task-form/task-form.component';
import { TaskListComponent } from './to-do/task-list/task-list.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoFilterPipe } from './to-do/todo-filter.pipe';
import { MemoryCardsComponent } from './memory-cards/memory-cards.component';
import { NavigationComponent } from './navigation/navigation.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    ToDoComponent,
    ToDoFilterPipe,
    MemoryCardsComponent,
    NavigationComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
