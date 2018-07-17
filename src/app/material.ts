import {
  MatButtonModule,
  MatCardModule, 
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatExpansionModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  
  

} from '@angular/material';


import { NgModule } from '@angular/core';

@NgModule({
  exports: [
     MatButtonModule,
     MatCheckboxModule,
     MatGridListModule,
     MatDialogModule,
     MatCardModule,
     MatIconModule,
     MatToolbarModule,
     MatFormFieldModule,
     MatInputModule,
     MatDividerModule,
     MatExpansionModule,
     MatSidenavModule,
     MatListModule,
     MatMenuModule,
    
    ]
})


export class MaterialModule { }