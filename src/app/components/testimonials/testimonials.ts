import { Component, signal } from '@angular/core';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  active = signal(0);

  testimonials: Testimonial[] = [
    {
      quote: 'Gilson é um desenvolvedor excepcional. Ele entrega código limpo, bem estruturado e resolve problemas complexos com clareza. Trabalhar com ele foi uma das melhores experiências que tive em time.',
      name: 'Ana Paula Rocha',
      role: 'Tech Lead · Finanblue',
    },
    {
      quote: 'A capacidade técnica do Gilson é impressionante. Em poucos dias ele dominou toda a stack do projeto e já estava contribuindo com melhorias de arquitetura que ninguém havia pensado antes.',
      name: 'Carlos Mendes',
      role: 'CTO · Startup SaaS',
    },
    {
      quote: 'Além de ótimo programador, o Gilson tem uma comunicação excelente. Ele explica decisões técnicas de forma clara para o time todo, o que agilizou muito nossas entregas.',
      name: 'Fernanda Lima',
      role: 'Product Manager · E-commerce',
    },
  ];

  get current(): Testimonial {
    return this.testimonials[this.active()];
  }

  prev() {
    this.active.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  next() {
    this.active.update(i => (i + 1) % this.testimonials.length);
  }
}
