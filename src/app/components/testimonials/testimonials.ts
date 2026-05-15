import { Component, signal } from '@angular/core';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo?: string;
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
      quote: 'Gilson é um profissional altamente dedicado, atuando como Analista de Sistemas Pleno, possui um excelente relacionamento interpessoal e postura íntegra, promovendo empatia e um ambiente de trabalho acolhedor e promissor. Como sua supervisora, acompanhei de perto sua evolução e a qualidade de seu trabalho, e posso afirmar com certeza que ele destaca-se pelo comprometimento com as demandas e pela mente aberta a novas ideias. Sempre disposto e interessado, surpreende constantemente com sua visão estratégica na criação de projetos inovadores e soluções impactantes. Sem dúvida, é um profissional que eleva o nível da equipe.',
      name: 'Clary Chagas',
      role: 'Supervisora · Centro de Excelência | Vivo Telefônica',
      photo: 'Clary.jpg',
    },
    {
      quote: 'Tenho grande satisfação em recomendar Gilson Fonseca, com quem trabalhei na Finanblue. Ele possui habilidades excepcionais em SQL e Crystal Reports, demonstrando um profundo conhecimento técnico e capacidade de escrever consultas otimizadas. Gilson também desenvolveu um software que integrou e melhorou informações de outro sistema da empresa, mostrando sua habilidade em resolver problemas práticos. Além disso, é dedicado ao trabalho em equipe, proativo e possui uma ética profissional admirável.',
      name: 'Jhonatan Marco de Oliveira',
      role: 'Analista de Sistemas · Finanblue',
    },
    {
      quote: 'É com grande satisfação que recomendo o Gilson como um desenvolvedor altamente competente e dedicado. Fiquei impressionado com suas habilidades técnicas e sua ética de trabalho. Uma das principais atividades que ele exerceu foi o desenvolvimento de um site com informações bancárias necessárias para nossa função. Além disso, é um excelente comunicador, sempre disposto a colaborar. Ele seria um ativo valioso para qualquer empresa.',
      name: 'Rafael Belisário Alcântara',
      role: 'Analista de Banco de Dados · Finanblue',
    },
    {
      quote: 'É com grande prazer que recomendo o Gilson. Sua dedicação é evidente em tudo que faz. É um profissional esforçado e comprometido, capaz de colaborar de forma excepcional em equipe. Seu talento como desenvolvedor é notável, sempre em busca de soluções inovadoras para os desafios que surgem. Sem dúvida ele é um excelente acréscimo para qualquer equipe.',
      name: 'Rafael Prado',
      role: 'Analista de Pricing PL · Finanblue',
    },
    {
      quote: 'Estudamos juntos e chegamos a trabalhar na mesma empresa. Proativo e comunicativo, com fluência e firmeza nas palavras. Ótimo colega de trabalho, sempre deu o seu melhor para seu crescimento e o da empresa, buscando métodos para facilitar o trabalho no dia a dia.',
      name: 'Marlon Raminelli',
      role: 'Colega de equipe',
    },
    {
      quote: 'Foi uma experiência muito gratificante trabalhar com esse profissional extremamente competente, comprometido com o trabalho pontual. Fazia um ótimo trabalho em equipe e era muito prestativo.',
      name: 'Jim Chang',
      role: 'Colega de equipe',
    },
    {
      quote: 'Cara gente boa e prestativo.',
      name: 'Wesley Siebert',
      role: 'Cybersecurity · Helpdesk',
    },
    {
      quote: 'Excelente profissional e muito esforçado.',
      name: 'Jeferson Lemos',
      role: 'Desenvolvedor Full Stack',
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
