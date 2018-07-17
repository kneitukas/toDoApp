import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '../../../node_modules/@angular/material';
import {DialogComponent} from '../notes/dialog/dialog.component';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  imgArray = []
  files = []


  dialogRef : MatDialogRef<DialogComponent>;

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }


    openDialog(file?) {
      this.dialogRef = this.dialog.open(DialogComponent, {
        width: '500px',
        hasBackdrop: false,
        data: {
          filename: file? file.name: ''
        }
      });
  
      this.dialogRef
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(name => {
        if (file) {
          const index = this.files.findIndex(f => f.name == file.name);
          if(index !== -1) {
            this.files[index] = { name,content: file.content }
          }
        } else {
          this.files.push({ name,content: ''})
        }
      });
   
    } 

    deleteNote(i) {
      this.files.splice(i,1)
    }

    clearAll() {
      this.files.length = 0;
      this.imgArray.length = 0;
    }

    onFileSelected(event) {
      this.imgArray.push(event.target.files[0])
      console.log(this.imgArray)
    }

}
