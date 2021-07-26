import { Injectable } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

/* Disclaimer Modal */
import { DisclaimerComponent } from '../all-modals/disclaimer/disclaimer.component';

/* Terms & Conditions Modal */
import { TermsConditionsComponent } from '../all-modals/terms-conditions/terms-conditions.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  disclaimerModal() {
    const modalRef = this.modalService.open(DisclaimerComponent, { size: 'lg', backdrop: 'static', centered: true });
    return modalRef;
  }

  termsConditionsModal() {
    const modalRef = this.modalService.open(TermsConditionsComponent, { size: 'lg', backdrop: 'static', centered: true });
    return modalRef;
  }
}
