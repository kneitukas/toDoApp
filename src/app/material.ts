import {MatButtonModule,MatCardModule, MatCheckboxModule,MatGridListModule,MatIconModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatDividerModule,MatExpansionModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [MatButtonModule, MatCheckboxModule,MatGridListModule,MatCardModule,MatIconModule,MatToolbarModule,MatFormFieldModule, MatInputModule,MatDividerModule,MatExpansionModule]
})


export class MaterialModule { }