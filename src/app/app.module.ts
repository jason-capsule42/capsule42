import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import * as $ from 'jquery';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { ResumeDeveloperComponent } from './components/resume-developer/resume-developer.component';
import { DevPortfolioComponent } from './components/dev-portfolio/dev-portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialLinksComponent,
    ResumeDeveloperComponent,
    DevPortfolioComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
