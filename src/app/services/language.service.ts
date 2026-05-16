import { Injectable, signal } from '@angular/core';
import { Lang } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang      = signal<Lang>('pt');
  switching = signal(false);

  toggle(selected: Lang) {
    if (selected === this.lang()) return;
    this.switching.set(true);
    setTimeout(() => {
      this.lang.set(selected);
      setTimeout(() => this.switching.set(false), 200);
    }, 180);
  }
}
