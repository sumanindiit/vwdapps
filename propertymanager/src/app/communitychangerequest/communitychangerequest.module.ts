import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunitychangerequestPageRoutingModule } from './communitychangerequest-routing.module';

import { CommunitychangerequestPage } from './communitychangerequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunitychangerequestPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CommunitychangerequestPage]
})
export class CommunitychangerequestPageModule {}
