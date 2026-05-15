import { Component, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-services',
  imports: [TranslatePipe],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services implements AfterViewInit {
  @ViewChildren('animated') items!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    this.items.forEach(el => observer.observe(el.nativeElement));
  }
}
