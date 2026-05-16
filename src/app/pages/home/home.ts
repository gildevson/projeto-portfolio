import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Welcome } from '../../components/welcome/welcome';
import { About } from '../../components/about/about';
import { Services } from '../../components/services/services';
import { Experience } from '../../components/experience/experience';
import { Projects } from '../../components/projects/projects';
import { Events } from '../../components/events/events';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Footer } from '../../components/footer/footer';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  imports: [NgClass, Navbar, Hero, Welcome, About, Services, Experience, Projects, Events, Testimonials, Footer],
  template: `
    <div [ngClass]="{ 'lang-fade': langSvc.switching() }">
      <app-navbar />
      <app-hero />
      <app-welcome />
      <app-about />
      <app-services />
      <app-experience />
      <app-projects />
      <app-events />
      <app-testimonials />
      <app-footer />
    </div>
  `,
})
export class Home {
  langSvc = inject(LanguageService);
}
