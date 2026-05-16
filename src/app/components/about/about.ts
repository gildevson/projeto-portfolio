import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  @ViewChildren('animated') items!: QueryList<ElementRef>;

  scrollToEvents() {
    document.getElementById('eventos')?.scrollIntoView({ behavior: 'smooth' });
  }

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
      { threshold: 0.12 }
    );
    this.items.forEach(el => observer.observe(el.nativeElement));
  }
}
