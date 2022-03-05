import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LandingComponent } from './landing/landing.component';
import { SkillsComponent } from './skills/skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingComponent,
    SkillsComponent,
    MyWorkComponent,
    AboutMeComponent,
    ContactFormComponent,
    FooterComponent,
    ImprintComponent,
    DataProtectionComponent,
    BackToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
