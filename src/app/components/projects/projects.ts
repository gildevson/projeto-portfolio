import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { LanguageService } from '../../services/language.service';

interface I18n { pt: string; en: string; }

interface Project {
  id: string;
  label: string;
  period: string;
  title: I18n;
  description: I18n;
  bullets: I18n[];
  tags: string[];
  color: string;
  featured: boolean;
  link?: string;
  mockups: { title: string; subtitle: string; image?: string }[];
}

@Component({
  selector: 'app-projects',
  imports: [NgClass, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit, OnDestroy {
  activeId      = signal('finanblue-treinamentos');
  showAll       = signal(false);
  lightboxSrc   = signal<string | null>(null);
  carouselIndex = signal(0);
  transitioning = signal(false);
  lang          = inject(LanguageService).lang;

  private touchStartX = 0;
  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;
  private readonly AUTO_PLAY_INTERVAL = 5000;

  ngOnInit() { this.startAutoPlay(); }
  ngOnDestroy() { this.stopAutoPlay(); }

  startAutoPlay() {
    if (window.innerWidth <= 640) return;
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      if (this.showAll() || this.transitioning()) return;
      const ids = this.featured.map(p => p.id);
      const next = (ids.indexOf(this.activeId()) + 1) % ids.length;
      this.select(ids[next]);
    }, this.AUTO_PLAY_INTERVAL);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) { clearInterval(this.autoPlayTimer); this.autoPlayTimer = null; }
  }

  pauseAndResume() {
    this.stopAutoPlay();
    setTimeout(() => this.startAutoPlay(), 8000);
  }

  carouselPrev() {
    this.carouselIndex.update(i => Math.max(i - 1, 0));
  }

  carouselNext() {
    this.carouselIndex.update(i => Math.min(i + 1, this.current.mockups.length - 1));
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches[0].clientX;
  }

  onTouchEnd(e: TouchEvent) {
    const diff = this.touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) this.carouselNext();
      else          this.carouselPrev();
    }
  }

  openLightbox(src: string | undefined) {
    if (src) this.lightboxSrc.set(src);
  }

  closeLightbox() {
    this.lightboxSrc.set(null);
  }

  projects: Project[] = [
    {
      id: 'finanblue-treinamentos',
      label: 'Finanblue Treinamentos',
      featured: true,
      period: 'Brasil · 2023–2025',
      title: {
        pt: 'Finanblue · Plataforma de Treinamentos',
        en: 'Finanblue · Training Platform',
      },
      description: {
        pt: 'Portal interno de vídeos, provas e exercícios criado para testar e consolidar o conhecimento dos colaboradores sobre os produtos e sistemas da Finanblue. A plataforma evoluiu continuamente com melhorias de usabilidade, novos módulos e funcionalidades — e hoje também é comercializada para clientes externos, gerando receita direta para a empresa.',
        en: 'Internal portal of videos, assessments and exercises built to test and consolidate employees\' knowledge of Finanblue\'s products and systems. The platform evolved continuously with usability improvements and new modules — and is now also sold to external clients, generating direct revenue for the company.',
      },
      bullets: [
        { pt: 'Portal de vídeos e provas sobre os produtos e sistemas internos da Finanblue', en: 'Video and assessment portal covering Finanblue\'s internal products and systems' },
        { pt: 'Plataforma em produção com mais de 30 usuários ativos — vendida a clientes gerando receita', en: 'Production platform with 30+ active users — sold to clients generating revenue' },
        { pt: 'Melhorias contínuas: novos módulos, trilhas de aprendizado e experiência do usuário', en: 'Continuous improvements: new modules, learning paths and user experience upgrades' },
        { pt: 'Geração de certificados em PDF, upload para AWS S3 e autenticação JWT com Passport', en: 'PDF certificate generation, AWS S3 upload and JWT authentication with Passport' },
      ],
      tags: ['ANGULAR', 'NESTJS', 'POSTGRESQL', 'PRISMA', 'JWT', 'AWS S3', 'SWAGGER', 'VERCEL'],
      color: '#00c9a7',
      mockups: [
        { title: 'Home · Catálogo', subtitle: 'Tela inicial',        image: 'FinanblueTreinamentoHome.png' },
        { title: 'Aula · Player',   subtitle: 'Tela de vídeo',       image: 'FinanblueTreinamentoTelaVideo.png' },
        { title: 'Prova Online',    subtitle: 'Avaliação do módulo',  image: 'FinanblueTreinamentoProva.png' },
        { title: 'Assistir Aula',   subtitle: 'Player completo',      image: 'FinanblueTreinamentoTelaAssist1.png' },
      ],
    },
    {
      id: 'pdv-caixa',
      label: 'PDV Caixa',
      featured: true,
      period: 'Brasil · 2022–2023',
      title: {
        pt: 'PDV Caixa · Sistema de Ponto de Venda',
        en: 'PDV Caixa · Point of Sale System',
      },
      description: {
        pt: 'Sistema desktop de ponto de venda (PDV) desenvolvido em C# e WPF para controle completo de caixa, movimentações operacionais e geração de relatórios financeiros. Solução robusta para gestão de fluxo de caixa com interface moderna e intuitiva.',
        en: 'Desktop point of sale (PDV) system developed in C# and WPF for full cash register control, operational movements and financial report generation. Robust solution for cash flow management with a modern and intuitive interface.',
      },
      bullets: [
        { pt: 'Controle completo de abertura, fechamento e movimentações de caixa', en: 'Full control of cash register opening, closing and movements' },
        { pt: 'Tela de operações com registro de entradas, saídas e histórico de transações', en: 'Operations screen with income, expense recording and transaction history' },
        { pt: 'Relatórios gerados automaticamente com totais por período e por operador', en: 'Automatically generated reports with totals by period and operator' },
      ],
      tags: ['C#', '.NET', 'WPF', 'SQL SERVER'],
      color: '#f59e0b',
      mockups: [
        { title: 'Home · Painel',  subtitle: 'Tela inicial',          image: 'PDV CAIXA_hOME.png' },
        { title: 'Operações',      subtitle: 'Movimentações de caixa', image: 'PDV Caixa_TelaOp.png' },
        { title: 'Relatórios',     subtitle: 'Geração de relatórios',  image: 'PDV_CAIXA_RelatoriosGere.png' },
        { title: 'Mov. Operador',  subtitle: 'Histórico por operador', image: 'PDV_CAIXA_MOV_OP.png' },
        { title: 'Visão Geral',    subtitle: 'Painel completo',        image: 'PDV_CAIXA_um.png' },
      ],
    },
    {
      id: 'influenciando-geracoes',
      label: 'Influenciando Gerações',
      featured: false,
      period: 'Brasil · 2024',
      title: {
        pt: 'Influenciando Gerações · Site Institucional',
        en: 'Influenciando Gerações · Institutional Website',
      },
      description: {
        pt: 'Projeto desenvolvido ao longo de um período de evolução contínua para consolidar conhecimentos práticos em desenvolvimento full stack, arquitetura de sistemas e integração com banco de dados em um cenário realista. A solução reúne dois grandes módulos: um Sistema de Ocorrências Bancárias e um Portal de Notícias, simulando um ambiente corporativo onde informações financeiras, operacionais e informativas coexistem de forma integrada.',
        en: 'Project developed over a period of continuous evolution to consolidate practical knowledge in full stack development, system architecture and database integration in a realistic scenario. The solution brings together two major modules: a Banking Incidents System and a News Portal, simulating a corporate environment where financial, operational and informational data coexist in an integrated way.',
      },
      bullets: [
        { pt: 'Módulo de ocorrências bancárias com consulta, padronização e categorização', en: 'Banking incidents module with search, standardisation and categorisation' },
        { pt: 'Portal de notícias integrado ao mesmo ambiente corporativo simulado', en: 'News portal integrated into the same simulated corporate environment' },
        { pt: 'Projeto publicado e acessível online — evolução contínua de funcionalidades', en: 'Project published and accessible online — continuously evolving features' },
      ],
      tags: ['REACT', 'NODE.JS', 'CSS'],
      color: '#10b981',
      link: 'https://courageous-druid-a551b3.netlify.app/',
      mockups: [
        { title: 'Home',       subtitle: 'Página inicial',    image: 'ong_home.png' },
        { title: 'Quem Somos', subtitle: 'Nossa história',    image: 'ong_somos.png' },
        { title: 'Projetos',   subtitle: 'Iniciativas sociais', image: 'ong_projetos.png' },
      ],
    },
    {
      id: 'portal-escola',
      label: 'Portal Escola',
      featured: false,
      period: 'Brasil · 2023',
      title: {
        pt: 'Portal Escola · Projeto JP',
        en: 'School Portal · JP Project',
      },
      description: {
        pt: 'Publicação educativa dedicada a fornecer informações relevantes aos leitores, com foco na história do C.E. Papa João Paulo I. O portal promove aprendizado e conhecimento em diversas áreas, abordando temas de interesse educacional e cultural, destacando a importância da escola como parte integrante do processo educacional.',
        en: 'Educational publication dedicated to providing relevant information to readers, focusing on the history of C.E. Papa João Paulo I. The portal promotes learning and knowledge across various areas, covering topics of educational and cultural interest.',
      },
      bullets: [
        { pt: 'Blog educativo com artigos sobre história e cultura da escola', en: 'Educational blog with articles on the school\'s history and culture' },
        { pt: 'Conteúdo que estimula o aprendizado e enriquece a compreensão dos leitores', en: 'Content that stimulates learning and enriches readers\' understanding' },
        { pt: 'Interface moderna focada na experiência de leitura e navegação', en: 'Modern interface focused on reading and navigation experience' },
      ],
      tags: ['REACT', 'CSS', 'NODE.JS'],
      color: '#6366f1',
      mockups: [
        { title: 'Portal da Escola', subtitle: 'Página principal', image: 'PortalDaEscola.png' },
        { title: 'Artigos',          subtitle: 'Publicações educativas', image: undefined },
        { title: 'Sobre',            subtitle: 'História da escola',     image: undefined },
      ],
    },
    {
      id: 'finanblue',
      label: 'Finanblue',
      featured: false,
      period: 'Brasil · 2023–2025',
      title: {
        pt: 'Finanblue · Portal Financeiro',
        en: 'Finanblue · Financial Portal',
      },
      description: {
        pt: 'Desenvolvimento do portal interno de gestão financeira, com dashboards em tempo real, relatórios automatizados e fluxo de aprovação de pagamentos.',
        en: 'Development of the internal financial management portal, with real-time dashboards, automated reports and payment approval workflows.',
      },
      bullets: [
        { pt: 'Construção do front-end completo com Angular e integração com APIs REST', en: 'Full front-end built with Angular and REST API integration' },
        { pt: 'Redução de 40% no tempo de geração de relatórios com otimizações de consulta', en: '40% reduction in report generation time through query optimisations' },
        { pt: 'Implementação de autenticação SSO e controle de permissões por perfil', en: 'SSO authentication and role-based permission control implemented' },
      ],
      tags: ['ANGULAR', 'NODE.JS', 'POSTGRESQL', 'REST API'],
      color: '#3b82f6',
      mockups: [
        { title: 'Dashboard Financeiro', subtitle: 'Visão geral em tempo real' },
        { title: 'Relatórios', subtitle: 'Exportação automatizada' },
        { title: 'Gestão de Usuários', subtitle: 'Controle de acesso' },
      ],
    },
    {
      id: 'banco-ocorrencias',
      label: 'Banco Ocorrências',
      featured: true,
      period: 'Brasil · 2023',
      title: {
        pt: 'Banco de Ocorrências · Gestão Interna',
        en: 'Incident Log · Internal Management',
      },
      description: {
        pt: 'Sistema desenvolvido com foco na centralização, padronização e consulta de ocorrências bancárias. O portal auxilia usuários na identificação do significado das ocorrências e centraliza layouts bancários, ordens e informações operacionais em um único ambiente. Construído com Angular no frontend e ASP.NET Core com C# no backend, integrado ao PostgreSQL. Atualmente utilizado por mais de 15 pessoas no suporte da empresa.',
        en: 'System built to centralise, standardise and query banking incidents. The portal helps users identify the meaning of incidents and centralises bank layouts, orders and operational information in a single environment. Built with Angular on the frontend and ASP.NET Core with C# on the backend, integrated with PostgreSQL. Currently used by over 15 people in the company\'s support team.',
      },
      bullets: [
        { pt: 'Consulta e identificação de ocorrências bancárias com padronização centralizada', en: 'Query and identification of banking incidents with centralised standardisation' },
        { pt: 'Portal unificado com layouts bancários, ordens e informações operacionais', en: 'Unified portal with bank layouts, orders and operational information' },
        { pt: 'Mais de 15 usuários ativos auxiliando o setor de suporte da empresa', en: 'Over 15 active users supporting the company\'s support team' },
      ],
      tags: ['ANGULAR', 'C#', 'SQL SERVER', '.NET'],
      color: '#f59e0b',
      mockups: [
        { title: 'Home',        subtitle: 'Tela inicial',            image: 'BANCO_OCORRENCIA_HOME.png' },
        { title: 'Ocorrências', subtitle: 'Registro de ocorrências', image: 'BANCO_OCORRENCIA_OCORRENCIA.png' },
        { title: 'Notícias',    subtitle: 'Comunicados internos',    image: 'BANCO_OCORRENCIA_NOTICIA.png' },
        { title: 'Validador',   subtitle: 'Validação de dados',      image: 'BANCO_OCORRENCIA_VALIDADOR.png' },
      ],
    },
  ];

  get featured(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  get current(): Project {
    return this.projects.find(p => p.id === this.activeId()) ?? this.projects[0];
  }

  select(id: string, manual = false) {
    if (id === this.activeId() || this.transitioning()) return;
    if (manual) this.pauseAndResume();
    this.transitioning.set(true);
    setTimeout(() => {
      this.activeId.set(id);
      this.carouselIndex.set(0);
      this.showAll.set(false);
      setTimeout(() => this.transitioning.set(false), 400);
    }, 280);
  }

  openAll() { this.showAll.set(true); }
  closeAll() { this.showAll.set(false); }

  getTagIcon(tag: string): string {
    const icons: Record<string, string> = {
      'ANGULAR': 'devicon-angular-plain',
      'REACT': 'devicon-react-original',
      'REACT NATIVE': 'devicon-react-original',
      'NODE.JS': 'devicon-nodejs-plain',
      'NESTJS': 'devicon-nestjs-plain',
      'TYPESCRIPT': 'devicon-typescript-plain',
      'POSTGRESQL': 'devicon-postgresql-plain',
      'MONGODB': 'devicon-mongodb-plain',
      'DOCKER': 'devicon-docker-plain',
      'EXPRESS': 'devicon-express-original',
      'REDIS': 'devicon-redis-plain',
      'NGINX': 'devicon-nginx-plain',
      'FIREBASE': 'devicon-firebase-plain',
      'C#': 'devicon-csharp-plain',
      '.NET': 'devicon-dot-net-plain',
      'SQL SERVER': 'devicon-microsoftsqlserver-plain',
      'SQLITE': 'devicon-sqlite-plain',
      'EXPO': 'devicon-react-original',
      'PRISMA': 'devicon-prisma-original',
      'AWS S3': 'devicon-amazonwebservices-plain',
      'SWAGGER': 'devicon-swagger-plain',
      'VERCEL': 'devicon-vercel-plain',
      'JWT': 'devicon-nodejs-plain',
    };
    return icons[tag] ?? '';
  }
}
