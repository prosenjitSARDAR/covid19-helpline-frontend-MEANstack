//BUILT-IN MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//MODULES
import { ThirdPartyPackageModule } from './modules/third-party-package/third-party-package.module';

//ROOT COMPONENT
import { AppComponent } from './app.component';

//CUSTOM COMPONENTS
import { NavbarComponent } from './components/navbar/navbar.component';
import { OxygenComponent } from './components/oxygen/oxygen.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { TestLabComponent } from './components/test-lab/test-lab.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { AmbulanceComponent } from './components/ambulance/ambulance.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OxygenComponent,
    HospitalComponent,
    MedicineComponent,
    TestLabComponent,
    KitchenComponent,
    AmbulanceComponent,
    FooterComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
