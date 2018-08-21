import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialogRef,MatDialog } from '@angular/material';
import { CameraDialogComponent } from '../camera-dialog/camera-dialog.component';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'notes-input',
  templateUrl: './notes-input.component.html',
  styleUrls: ['./notes-input.component.scss']
})
export class NotesInputComponent implements OnInit {
  state:boolean;
  @Output() imgResult = new EventEmitter<any>()
  @Output() note = new EventEmitter<object>();
  titleValue = '';
  noteValue = '';

  cameraDialogRef : MatDialogRef<CameraDialogComponent>

  constructor(private dialog:MatDialog) { }

  ngOnInit() {  
    this.state = false;  
}

openCameraDialog(image?) {
  this.cameraDialogRef = this.dialog.open(CameraDialogComponent, {
    hasBackdrop:true,
    data: {
      image: image? image.image:'',
      title: image? image.form.title:'',
      description:image? image.form.description:''
    }
    
  })

  this.cameraDialogRef
  .afterClosed()
  .pipe(filter(result => result !== undefined))
  .subscribe(result => {
      this.imgResult.emit(result)
      console.log(result)
    }); 
}

submit() {
  this.note.emit({title:this.titleValue,description:this.noteValue})
  this.titleValue = '';
  this.noteValue = '';
}
}
