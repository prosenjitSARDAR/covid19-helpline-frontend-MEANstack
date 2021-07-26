import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal-service/modal.service';

// MODAL COMPONENTS 
import { DisclaimerComponent } from '../modal/all-modals/disclaimer/disclaimer.component';
import { TermsConditionsComponent } from '../modal/all-modals/terms-conditions/terms-conditions.component';

@NgModule({
  declarations: [
    DisclaimerComponent,
    TermsConditionsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ModalService]
})
export class ModalModule { }
