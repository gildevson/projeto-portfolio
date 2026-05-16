import { Component, signal, inject } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { LanguageService } from '../../services/language.service';

interface I18n { pt: string; en: string; }

interface Speaker {
  name: string;
  topic?: I18n;
}

interface EventItem {
  name: string;
  location: string;
  date: string;
  sponsors?: string[];
  friends?: string[];
  speakers: Speaker[];
  photos: { src: string; alt: string }[];
  post: I18n[];
}

@Component({
  selector: 'app-events',
  imports: [TranslatePipe],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events {
  lightbox = signal<string | null>(null);
  lang = inject(LanguageService).lang;

  open(src: string) { this.lightbox.set(src); }
  close() { this.lightbox.set(null); }

  events: EventItem[] = [
    {
      name: 'CodeCon Summit 2025',
      location: 'Curitiba, Brasil',
      date: '2025 · 2 dias',
      speakers: [
        { name: 'Paulo Silveira' },
        { name: 'Erick Wendel' },
        { name: 'Giulia Bordignon' },
        { name: 'Fernanda Kipper' },
        { name: 'Zeno Rocha' },
      ],
      photos: [
        { src: 'CodeCon2025_home.jpg',          alt: 'Code Con Summit 2025 — foto em grupo' },
        { src: 'code_con_2025_erick_wendel.jpg', alt: 'Erick Wendel — Code Con 2025' },
        { src: 'code_con_summit_palestra.jpg',   alt: 'Palestra — Code Con 2025' },
      ],
      post: [
        {
          pt: 'Participar da Codecon Summit 25 foi uma experiência marcante na minha trajetória profissional. O evento superou todas as expectativas, proporcionando muito mais do que aprendizado técnico: foi uma verdadeira imersão em conhecimento, networking e troca de experiências com grandes nomes da tecnologia.',
          en: 'Attending Codecon Summit 25 was a landmark experience in my professional journey. The event exceeded all expectations, delivering much more than technical learning — it was a full immersion in knowledge, networking and experience-sharing with leading names in technology.',
        },
        {
          pt: 'Durante o evento, tive a oportunidade de acompanhar palestras inspiradoras de profissionais como Paulo Silveira, Erick Wendel, Giulia Bordignon e Fernanda Kipper, que compartilharam não apenas conhecimento técnico, mas também suas trajetórias, desafios e aprendizados dentro da área de tecnologia.',
          en: 'Throughout the event, I had the opportunity to follow inspiring talks by professionals such as Paulo Silveira, Erick Wendel, Giulia Bordignon and Fernanda Kipper, who shared not only technical knowledge but also their journeys, challenges and lessons learned within the technology field.',
        },
        {
          pt: 'Um dos pontos mais impactantes foi perceber de perto a força da comunidade tech e entender que cada profissional possui seu próprio tempo de evolução. Estar próximo de pessoas que admiro e que já trilham caminhos que também desejo seguir trouxe ainda mais motivação para continuar evoluindo como desenvolvedor.',
          en: 'One of the most impactful moments was witnessing first-hand the strength of the tech community and understanding that every professional has their own pace of growth. Being close to people I admire and who are already walking paths I also wish to follow brought even more motivation to keep evolving as a developer.',
        },
        {
          pt: 'Saio dessa experiência inspirado, motivado e com a certeza de que o aprendizado contínuo, a troca de conhecimento e a conexão com a comunidade fazem toda a diferença na construção de uma carreira sólida na tecnologia.',
          en: 'I leave this experience inspired, motivated and certain that continuous learning, knowledge exchange and community connection make all the difference in building a solid career in technology.',
        },
      ],
    },
    {
      name: 'Meetup Codecon',
      location: 'Curitiba, Brasil',
      date: '2025',
      sponsors: ['FullCycle', 'Neasure', 'OnlyOffice', 'Itaú'],
      friends: ['Jhonatan Marco de Oliveira', 'Rafael Belisário Alcântara'],
      speakers: [
        {
          name: 'Vinícius Lojhan',
          topic: {
            pt: 'Do Transacional ao Analítico: Os Tradeoffs na Arquitetura de Bancos de Dados Modernos',
            en: 'From Transactional to Analytical: The Tradeoffs in Modern Database Architecture',
          },
        },
        {
          name: 'Gustavo Stingelin',
          topic: {
            pt: 'Concorrência Estruturada e o Mito do Multi-thread',
            en: 'Structured Concurrency and the Multi-thread Myth',
          },
        },
      ],
      photos: [
        { src: 'meetupcodecon_um.jpg',   alt: 'Meetup Codecon — foto 1' },
        { src: 'meetupcodecon_dois.jpg', alt: 'Meetup Codecon — foto 2' },
        { src: 'meetupcodecon_tres.jpg', alt: 'Meetup Codecon — foto 3' },
      ],
      post: [
        {
          pt: 'Tive a honra de participar do Meetup Codecon ao lado dos meus amigos Jhonatan Marco de Oliveira e Rafael Belisário Alcântara. O evento contou com conteúdos extremamente técnicos e voltados para quem trabalha com desenvolvimento e arquitetura de software.',
          en: 'I had the honour of attending the Meetup Codecon alongside my friends Jhonatan Marco de Oliveira and Rafael Belisário Alcântara. The event featured highly technical content aimed at those who work with software development and architecture.',
        },
        {
          pt: 'Vinícius Lojhan abordou os tradeoffs entre sistemas transacionais e analíticos, discutindo os desafios de arquiteturas que atendam a requisitos de desempenho e escalabilidade. Gustavo Stingelin desmistificou o uso de threads com exemplos práticos em Node.js e Java, trazendo insights valiosos sobre concorrência estruturada e otimização de recursos em aplicações de grande porte.',
          en: 'Vinícius Lojhan addressed the tradeoffs between transactional and analytical systems, discussing the challenges of architectures that meet performance and scalability requirements. Gustavo Stingelin demystified thread usage with practical examples in Node.js and Java, bringing valuable insights on structured concurrency and resource optimisation in large-scale applications.',
        },
        {
          pt: 'Normalmente estamos focados em programar, mas eventos como esse nos fazem refletir sobre a importância de considerar a escalabilidade e o uso eficiente de threads — pontos essenciais para desenvolver aplicações robustas e eficientes. Só tenho a agradecer, foi show!',
          en: 'We normally focus on coding, but events like this make us reflect on the importance of scalability and efficient thread usage — essential points for building robust and efficient applications. I can only be grateful — it was brilliant!',
        },
      ],
    },
    {
      name: 'Meetup Codecon #03',
      location: 'Curitiba, Brasil',
      date: 'Outubro 2024 · ~2h',
      speakers: [],
      photos: [
        { src: 'meetupcodecon_terceiroEventoUM.jpg',   alt: 'Meetup Codecon #03 — foto 1' },
        { src: 'meetupcodecon_terceiroEventoDois.jpg', alt: 'Meetup Codecon #03 — foto 2' },
        { src: 'meetupcodecon_terceiroEventoTres.jpg', alt: 'Meetup Codecon #03 — foto 3' },
      ],
      post: [
        {
          pt: 'Minha participação no Meetup Codecon #03, em Curitiba, marcou um momento importante na minha trajetória profissional, sendo um dos primeiros eventos de tecnologia dos quais participei presencialmente. A experiência foi extremamente enriquecedora, tanto pelo conhecimento compartilhado quanto pela oportunidade de troca de ideias com profissionais da área.',
          en: 'My participation in Meetup Codecon #03, in Curitiba, marked an important moment in my professional journey — one of the first technology events I attended in person. The experience was extremely enriching, both for the knowledge shared and for the opportunity to exchange ideas with industry professionals.',
        },
        {
          pt: 'Durante o evento, acompanhei discussões sobre os fundamentos dos verbos HTTP, essenciais para a comunicação entre cliente e servidor em aplicações web. Foram abordados métodos como GET, POST, PUT e DELETE, além de conceitos relacionados a HEAD e PATCH, destacando a importância da segurança e das boas práticas na construção de APIs RESTful.',
          en: 'During the event, I followed discussions on the fundamentals of HTTP verbs, essential for client-server communication in web applications. Methods such as GET, POST, PUT and DELETE were covered, along with concepts related to HEAD and PATCH, highlighting the importance of security and best practices in building RESTful APIs.',
        },
        {
          pt: 'Além do conteúdo técnico, também participei de conversas sobre aplicações práticas utilizando Node.js e React — tecnologias que fazem parte da minha rotina de desenvolvimento. O meetup proporcionou uma visão ainda mais ampla sobre desenvolvimento frontend e backend, integração de sistemas e arquitetura de aplicações modernas.',
          en: 'Beyond the technical content, I also joined conversations about practical applications using Node.js and React — technologies that are part of my daily development routine. The meetup provided an even broader perspective on frontend and backend development, system integration and modern application architecture.',
        },
        {
          pt: 'Participar desse evento reforçou minha motivação em evoluir constantemente na área de tecnologia, além de mostrar a importância da comunidade tech na troca de experiências, aprendizado contínuo e crescimento profissional.',
          en: 'Attending this event reinforced my motivation to constantly evolve in the technology field, while also highlighting the importance of the tech community in sharing experiences, continuous learning and professional growth.',
        },
      ],
    },
  ];
}
