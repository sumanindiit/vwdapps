import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddcomplaintPageRoutingModule } from './addcomplaint-routing.module';
import { AddcomplaintPage } from './addcomplaint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddcomplaintPageRoutingModule
  ],
  declarations: [AddcomplaintPage]
})
export class AddcomplaintPageModule {}
