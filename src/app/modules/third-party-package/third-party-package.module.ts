import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//3RD PARTY PACKAGE MODULE
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule
  ],
  exports: [
    NgbModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule
  ]
})
export class ThirdPartyPackageModule { }
