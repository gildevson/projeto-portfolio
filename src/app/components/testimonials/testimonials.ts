import { Component, signal, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { LanguageService } from '../../services/language.service';

interface I18n { pt: string; en: string; }

interface Testimonial {
  quote: I18n;
  name: string;
  role: string;
  photo?: string;
  link?: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [NgClass, TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  active    = signal(0);
  animState = signal<'idle' | 'exit' | 'enter'>('idle');
  direction = signal<'left' | 'right'>('right');
  lang      = inject(LanguageService).lang;

  testimonials: Testimonial[] = [
    {
      quote: {
        pt: 'Gilson é um profissional altamente dedicado, atuando como Analista de Sistemas Pleno, possui um excelente relacionamento interpessoal e postura íntegra, promovendo empatia e um ambiente de trabalho acolhedor e promissor. Como sua supervisora, acompanhei de perto sua evolução e a qualidade de seu trabalho, e posso afirmar com certeza que ele destaca-se pelo comprometimento com as demandas e pela mente aberta a novas ideias. Sempre disposto e interessado, surpreende constantemente com sua visão estratégica na criação de projetos inovadores e soluções impactantes. Sem dúvida, é um profissional que eleva o nível da equipe.',
        en: 'Gilson is a highly dedicated professional, working as a Mid-Level Systems Analyst. He has excellent interpersonal skills and integrity, fostering empathy and a welcoming, promising work environment. As his supervisor, I closely followed his growth and the quality of his work, and I can confidently say that he stands out for his commitment and his open mind to new ideas. Always willing and engaged, he constantly surprises with his strategic vision in creating innovative projects and impactful solutions. Without a doubt, he is a professional who elevates the team\'s standards.',
      },
      name: 'Clary Chagas',
      role: 'Supervisora · Centro de Excelência | Vivo Telefônica',
      photo: 'Clary.jpg',
      link: 'https://www.linkedin.com/in/clary-chagas-7120a3197/',
    },
    {
      quote: {
        pt: 'É com grande prazer que recomendo o Gilson. Trabalho ao lado dele e sua dedicação é evidente em tudo que faz. Gilson é um profissional esforçado e comprometido, capaz de colaborar de forma excepcional em equipe. Seu talento como desenvolvedor é notável, sempre em busca de soluções inovadoras para os desafios que surgem. Sem dúvida ele é um excelente acréscimo para qualquer equipe.',
        en: 'It is with great pleasure that I recommend Gilson. I work alongside him and his dedication is evident in everything he does. Gilson is a hardworking and committed professional, capable of collaborating exceptionally as a team player. His talent as a developer is remarkable, always seeking innovative solutions to emerging challenges. He is undoubtedly an excellent addition to any team.',
      },
      name: 'Rafael Prado',
      role: 'Analista de Pricing PL · DB Diagnósticos',
      photo: 'rafael_prado.jpg',
      link: 'https://www.linkedin.com/in/rafael-prado-9b51198b/',
    },
    {
      quote: {
        pt: 'É com grande satisfação que recomendo o Gilson como um desenvolvedor altamente competente e dedicado. Fiquei impressionado com suas habilidades técnicas e sua ética de trabalho. Uma das principais atividades que ele exerceu foi o desenvolvimento de um site com informações bancárias necessárias para nossa função. Além disso, é um excelente comunicador, sempre disposto a colaborar. Ele seria um ativo valioso para qualquer empresa.',
        en: 'It is with great satisfaction that I recommend Gilson as a highly competent and dedicated developer. I was impressed by his technical skills and work ethic. One of his main contributions was developing a website with banking information essential to our work. He is also an excellent communicator, always willing to collaborate. He would be a valuable asset to any company.',
      },
      name: 'Rafael Belisário Alcântara',
      role: 'Analista de Banco de Dados · Finanblue',
      photo: 'rafael_alcantara.jpg',
      link: 'https://www.linkedin.com/in/rafael-b-alcantara/',
    },
    {
      quote: {
        pt: 'Tenho grande satisfação em recomendar Gilson Fonseca, com quem trabalhei na Finanblue. Ele possui habilidades excepcionais em SQL e Crystal Reports, demonstrando um profundo conhecimento técnico e capacidade de escrever consultas otimizadas. Gilson também desenvolveu um software que integrou e melhorou mais outras informações de outro sistema da empresa, mostrando sua habilidade em resolver problemas práticos. Além das suas competências técnicas, Gilson é dedicado ao trabalho em equipe, proativo na resolução de problemas e possui uma ética profissional admirável. Sem hesitação, recomendo Gilson como um valioso ativo para qualquer equipe que valorize excelência técnica e resultados consistentes.',
        en: 'I am very pleased to recommend Gilson Fonseca, with whom I worked at Finanblue. He has exceptional skills in SQL and Crystal Reports, demonstrating deep technical knowledge and the ability to write optimised queries. Gilson also developed software that integrated and enhanced information from another company system, showcasing his ability to solve practical problems. Beyond his technical skills, Gilson is dedicated to teamwork, proactive in problem-solving, and holds an admirable professional ethic. Without hesitation, I recommend Gilson as a valuable asset to any team that values technical excellence and consistent results.',
      },
      name: 'Jhonatan Marco de Oliveira',
      role: 'Analista de Sistemas · Minsaid',
      photo: 'jhonathan.jpg',
      link: 'https://www.linkedin.com/in/jhontanmarco/',
    },
    {
      quote: {
        pt: 'Estudamos juntos e chegamos a trabalhar na mesma empresa. Proativo e comunicativo, com fluência e firmeza nas palavras. Ótimo colega de trabalho, sempre deu o seu melhor para seu crescimento e crescimento da empresa buscando métodos para facilitar seu trabalho no dia a dia.',
        en: 'We studied together and ended up working at the same company. Proactive and communicative, with fluency and confidence in his words. A great colleague, always giving his best for his own growth and the company\'s, seeking methods to make day-to-day work easier.',
      },
      name: 'Marlon Raminelli',
      role: 'Auxiliar Mecânico',
      photo: 'mARLON.jpg',
      link: 'https://www.linkedin.com/in/marlon-raminelli-6a971a170/',
    },
    {
      quote: {
        pt: 'Foi uma experiência muito gratificante trabalhar com esse profissional extremamente competente, comprometido com o trabalho pontual. Fazia um ótimo trabalho em equipe e era muito prestativo.',
        en: 'It was a very rewarding experience working with this extremely competent professional, committed to timely work. He was a great team player and always very helpful.',
      },
      name: 'Jim Chang',
      role: 'Colega de equipe · Unigatec',
      photo: 'JIM_CHANG.jpg',
      link: 'https://www.linkedin.com/in/jim-chang-868290179/',
    },
  ];

  get current(): Testimonial {
    return this.testimonials[this.active()];
  }

  navigate(dir: 'prev' | 'next') {
    if (this.animState() !== 'idle') return;

    this.direction.set(dir === 'next' ? 'right' : 'left');
    this.animState.set('exit');

    setTimeout(() => {
      if (dir === 'next') {
        this.active.update(i => (i + 1) % this.testimonials.length);
      } else {
        this.active.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
      }
      this.animState.set('enter');
      setTimeout(() => this.animState.set('idle'), 380);
    }, 280);
  }

  goTo(index: number) {
    if (this.animState() !== 'idle' || index === this.active()) return;
    this.direction.set(index > this.active() ? 'right' : 'left');
    this.animState.set('exit');
    setTimeout(() => {
      this.active.set(index);
      this.animState.set('enter');
      setTimeout(() => this.animState.set('idle'), 380);
    }, 280);
  }
}
