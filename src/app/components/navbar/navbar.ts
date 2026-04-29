import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  menuOpen    = signal(false);
  menuClosing = signal(false);

  toggleMenu() {
    if (this.menuOpen()) {
      this.menuClosing.set(true);
      setTimeout(() => {
        this.menuOpen.set(false);
        this.menuClosing.set(false);
      }, 380);
    } else {
      this.menuOpen.set(true);
    }
  }

  scrollTo(id: string) {
    this.menuClosing.set(true);
    setTimeout(() => {
      this.menuOpen.set(false);
      this.menuClosing.set(false);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 380);
  }
}
