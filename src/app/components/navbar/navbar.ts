import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
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
}
