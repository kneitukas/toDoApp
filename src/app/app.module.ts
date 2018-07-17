import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { TaskFormComponent } from './to-do/task-form/task-form.component';
import { TaskListComponent } from './to-do/task-list/task-list.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoFilterPipe } from './to-do/todo-filter.pipe';
import { MemoryCardsComponent } from './memory-cards/memory-cards.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { MenuComponent } from './menu/menu.component';
import { NotesComponent } from './notes/notes.component';
import { DialogComponent } from './notes/dialog/dialog.component';




const appRoutes : Routes = [
  { path: '', component: MenuComponent },
  { path:'to-do', component: ToDoComponent },
  { path:'notes', component: NotesComponent },
  { path:'scheduler', component: SchedulerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    ToDoComponent,
    ToDoFilterPipe,
    MemoryCardsComponent,
    NavigationComponent,
    SchedulerComponent,
    MenuComponent,
    NotesComponent,
    DialogComponent
    

   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
