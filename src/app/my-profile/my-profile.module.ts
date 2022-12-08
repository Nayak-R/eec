import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateProfileComponent
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    MatSelectModule,
    FormsModule
  ]

})
export class MyProfileModule { }
