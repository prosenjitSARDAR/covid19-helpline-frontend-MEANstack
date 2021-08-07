//BUILT-IN MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//MODULES
import { ThirdPartyPackageModule } from './modules/third-party-package/third-party-package.module';

//ROOT COMPONENT
import { AppComponent } from './app.component';

//CUSTOM COMPONENTS
import { NavbarComponent } from './components/navbar/navbar.component';
import { CovidTrackerComponent } from './components/covid-tracker/covid-tracker.component';
import { OxygenComponent } from './components/oxygen/oxygen.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { TestLabComponent } from './components/test-lab/test-lab.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { AmbulanceComponent } from './components/ambulance/ambulance.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//GUARDS
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/logged-in.guard';

//INTERCEPTORS
import { TokenInterceptorService } from './interceptors/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CovidTrackerComponent,
    OxygenComponent,
    HospitalComponent,
    MedicineComponent,
    TestLabComponent,
    KitchenComponent,
    AmbulanceComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ThirdPartyPackageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthGuard,
    LoggedInGuard,
    TokenInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
