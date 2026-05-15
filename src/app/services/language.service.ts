import { Injectable, signal } from '@angular/core';
import { Lang } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<Lang>('pt');

  toggle(selected: Lang) {
    this.lang.set(selected);
  }
}
