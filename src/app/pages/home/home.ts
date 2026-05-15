import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Welcome } from '../../components/welcome/welcome';
import { About } from '../../components/about/about';
import { Services } from '../../components/services/services';
import { Experience } from '../../components/experience/experience';
import { Projects } from '../../components/projects/projects';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Welcome, About, Services, Experience, Projects, Testimonials, Footer],
  template: `
    <app-navbar />
    <app-hero />
    <app-welcome />
    <app-about />
    <app-services />
    <app-experience />
    <app-projects />
    <app-testimonials />
    <app-footer />
  `,
})
export class Home {}
