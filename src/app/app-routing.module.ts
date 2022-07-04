import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SuccessComponent } from './success/success.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillsComponent } from './skills/skills.component';
import { BabyNamesComponent } from './baby-names/baby-names.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'baby', component: BabyNamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
