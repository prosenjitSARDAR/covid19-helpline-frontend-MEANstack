import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/config';
import { ModalService } from 'src/app/modules/modal/modal-service/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private author_NAME: string = "Prosenjit Sardar";
  private author_GMAIL: string = "prosenjit19111995@gmail.com";
  private author_GITHUB: string = "https://github.com/prosenjitSARDAR";
  private author_LINKEDIN: string = "https://www.linkedin.com/in/prosenjitsardar/";

  constructor(private _modalService: ModalService) { }

  ngOnInit(): void {
  }

  authorName() {
    return this.author_NAME;
  }
  authorEmail() {
    return this.author_GMAIL;
  }
  authorGitHub() {
    return this.author_GITHUB;
  }
  authorLinkedin() {
    return this.author_LINKEDIN;
  }

  disclaimer() {
    this._modalService.disclaimerModal();
  }

}
