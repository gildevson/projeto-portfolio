import { Component, signal, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private router = inject(Router);

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

  goHome() {
    const url = this.router.url;
    const isHome = url === '/' || url === '' || url.startsWith('/#');
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
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
      } else {
        this.router.navigate(['/'], { fragment: id });
      }
    }, 380);
  }
}
