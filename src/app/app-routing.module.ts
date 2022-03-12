import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LandingComponent } from './landing/landing.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, 
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent},
  {path:'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
