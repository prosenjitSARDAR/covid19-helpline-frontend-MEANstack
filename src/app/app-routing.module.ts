import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { AmbulanceComponent } from './components/ambulance/ambulance.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { OxygenComponent } from './components/oxygen/oxygen.component';
import { TestLabComponent } from './components/test-lab/test-lab.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//GUARDS
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'oxygen',
    pathMatch: 'full'
  },
  {
    path: 'oxygen',
    component: OxygenComponent,
    data: { title: 'Medical Oxygen Service' }
  },
  {
    path: 'hospital',
    component: HospitalComponent,
    data: { title: 'Covid Hospital & Facility' }
  },
  {
    path: 'medicine',
    component: MedicineComponent,
    data: { title: 'Covid-19 Medicine (Remdesivir & actemra)' }
  },
  {
    path: 'test-lab',
    component: TestLabComponent,
    data: { title: 'Covid-19 Test Laboratory' }
  },
  {
    path: 'kitchen',
    component: KitchenComponent,
    data: { title: 'Community Kitchen' }
  },
  {
    path: 'ambulance',
    component: AmbulanceComponent,
    data: { title: 'Covid-19 Ambulance Service' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Registration' },
    canActivate: [LoggedInGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
    canActivate: [LoggedInGuard]
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    data: { title: 'Service Profile' },
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
