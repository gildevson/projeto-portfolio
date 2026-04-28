import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Welcome } from '../../components/welcome/welcome';
import { Services } from '../../components/services/services';
import { Projects } from '../../components/projects/projects';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Welcome, Services, Projects, Testimonials, Footer],
  template: `
    <app-navbar />
    <app-hero />
    <app-welcome />
    <app-services />
    <app-projects />
    <app-testimonials />
    <app-footer />
  `,
})
export class Home {}
