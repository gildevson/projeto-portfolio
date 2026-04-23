import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Welcome } from './components/welcome/welcome';
import { Services } from './components/services/services';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Welcome, Services, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
