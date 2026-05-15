import { Component, signal, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Lang } from '../../i18n/translations';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private router = inject(Router);
  private langService = inject(LanguageService);

  menuOpen    = signal(false);
  menuClosing = signal(false);
  currentLang = this.langService.lang;

  setLang(lang: Lang) {
    this.langService.toggle(lang);
  }

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
      const el = document.getElementById('topo');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      this.router.navigate(['/'], { fragment: 'topo' });
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
