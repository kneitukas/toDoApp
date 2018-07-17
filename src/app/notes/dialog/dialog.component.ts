import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  form : FormGroup;
  
  constructor(
    private formBuilder:FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {}

  ngOnInit() {
      this.form = this.formBuilder.group({
        filename: this.data ? this.data.text: ''
      })
  }

  submit(form) {
    this.dialogRef.close(`${form.value.filename}`)
  }


}
