import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunitychangerequestPage } from './communitychangerequest.page';

const routes: Routes = [
  {
    path: '',
    component: CommunitychangerequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunitychangerequestPageRoutingModule {}
