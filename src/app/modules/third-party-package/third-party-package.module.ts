import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//3RD PARTY PACKAGE MODULE
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 3000, closeButton: true }),
    NgxSpinnerModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule
  ],
  exports: [
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule,
    NgxSpinnerModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule
  ]
})
export class ThirdPartyPackageModule { }
