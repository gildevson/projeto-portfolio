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

  ngOnInit() { }
  ngOnDestroy() { this.stopAutoPlay(); }

  startAutoPlay() { }
  stopAutoPlay() {
    if (this.autoPlayTimer) { clearInterval(this.autoPlayTimer); this.autoPlayTimer = null; }
  }
  pauseAndResume() { }

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
        pt: 'Portal interno de vídeos, provas e exercícios criado para capacitar colaboradores nos produtos e sistemas da Finanblue. Funcionários bem treinados entregam um suporte de maior qualidade — o que fortalece diretamente os produtos que geram receita na empresa. Com o tempo, o sistema evoluiu para um módulo comercializado a clientes externos, passando a gerar receita própria e tornando-se parte estratégica do negócio.',
        en: 'Internal portal of videos, assessments and exercises built to train employees on Finanblue\'s products and systems. Well-trained staff deliver higher-quality support — directly strengthening the products that drive company revenue. Over time, the system evolved into a module sold to external clients, generating its own revenue and becoming a strategic part of the business.',
      },
      bullets: [
        { pt: 'Capacitação de colaboradores que atuam no suporte dos produtos que geram receita na empresa', en: 'Training of employees who support the products that drive company revenue' },
        { pt: 'Módulo comercializado a clientes externos com mais de 30 usuários ativos em produção', en: 'Module sold to external clients with over 30 active users in production' },
        { pt: 'Melhorias contínuas: novos módulos, trilhas de aprendizado e experiência do usuário', en: 'Continuous improvements: new modules, learning paths and user experience upgrades' },
        { pt: 'Geração de certificados em PDF, upload para AWS S3 e autenticação JWT com Passport', en: 'PDF certificate generation, AWS S3 upload and JWT authentication with Passport' },
      ],
      tags: ['ANGULAR', 'NESTJS', 'TYPESCRIPT', 'POSTGRESQL', 'PRISMA', 'JWT', 'AWS S3', 'SWAGGER', 'HOSTINGER', 'RENDER'],
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
        pt: 'Sistema desktop de ponto de venda (PDV) desenvolvido em C# e WPF para controle completo de caixa, movimentações operacionais e gestão financeira. Reúne PDV, controle contábil, contas a pagar e a receber, gestão de pedidos e emissão de recibos em um único ambiente robusto e intuitivo.',
        en: 'Desktop point of sale (PDV) system developed in C# and WPF for full cash register control, operational movements and financial management. Combines PDV, accounting control, accounts payable and receivable, order management and receipt issuance in a single robust and intuitive environment.',
      },
      bullets: [
        { pt: 'Controle completo de abertura, fechamento e movimentações de caixa', en: 'Full control of cash register opening, closing and movements' },
        { pt: 'Tela de operações com registro de entradas, saídas e histórico de transações', en: 'Operations screen with income, expense recording and transaction history' },
        { pt: 'Módulo contábil com contas a pagar e contas a receber — controle de vencimentos e liquidações', en: 'Accounting module with accounts payable and receivable — due date and settlement control' },
        { pt: 'Gestão de pedidos com acompanhamento de status e emissão de recibos', en: 'Order management with status tracking and receipt issuance' },
        { pt: 'Relatórios gerados automaticamente com totais por período e por operador', en: 'Automatically generated reports with totals by period and operator' },
      ],
      tags: ['C#', '.NET 8', 'WPF', 'POSTGRESQL', 'DAPPER', 'RDLC', 'FASTREPORT', 'LIVECHARTS', 'BCRYPT'],
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
      id: 'banco-ocorrencias',
      label: 'Banco Ocorrências',
      featured: true,
      period: 'Brasil · 2023',
      title: {
        pt: 'Banco de Ocorrências · Site de Notícias e Validadores',
        en: 'Incident Log · News Site & Validators',
      },
      description: {
        pt: 'Sistema interno desenvolvido para centralizar, padronizar e consultar ocorrências bancárias. O portal reúne em um único ambiente: o banco de ocorrências com seus códigos e descrições, os recursos de layouts bancários com títulos e especificações, e um site de notícias e publicações onde a equipe de suporte divulga comunicados, atualizações operacionais e informações relevantes vindas diretamente dos bancos. Construído com Angular no frontend e ASP.NET Core com C# no backend, integrado ao PostgreSQL. Utilizado por mais de 15 pessoas no suporte da empresa.',
        en: 'Internal system built to centralise, standardise and query banking incidents. The portal brings together in a single environment: the incident log with codes and descriptions, bank layout resources with titles and specifications, and a news and publications site where the support team shares announcements, operational updates and information sourced directly from the banks. Built with Angular on the frontend and ASP.NET Core with C# on the backend, integrated with PostgreSQL. Used by over 15 people in the company\'s support team.',
      },
      bullets: [
        { pt: 'Banco de ocorrências bancárias com códigos, descrições e padronização centralizada', en: 'Banking incident log with codes, descriptions and centralised standardisation' },
        { pt: 'Recursos de layouts bancários: títulos, especificações e referências por banco emissor', en: 'Bank layout resources: titles, specifications and references by issuing bank' },
        { pt: 'Site de notícias e publicações com comunicados operacionais vindos diretamente dos bancos', en: 'News and publications site with operational announcements sourced directly from the banks' },
        { pt: 'Consumo da API brapi.dev para exibição da cotação do dólar em tempo real na plataforma', en: 'Integration with brapi.dev API to display real-time dollar exchange rate on the platform' },
        { pt: 'Autenticação própria com redefinição de senha via SMTP — solução de baixo custo integrada ao fluxo do sistema', en: 'Custom authentication with password reset via SMTP — low-cost solution integrated into the system flow' },
        { pt: 'Validador integrado e mais de 15 usuários ativos no setor de suporte da empresa', en: 'Integrated validator and over 15 active users in the company\'s support team' },
      ],
      tags: ['ANGULAR', 'CHART.JS', 'C#', 'ASP.NET CORE', 'DAPPER', 'JWT', 'POSTGRESQL'],
      color: '#f59e0b',
      mockups: [
        { title: 'Home',        subtitle: 'Tela inicial',            image: 'BANCO_OCORRENCIA_HOME.png' },
        { title: 'Ocorrências', subtitle: 'Registro de ocorrências', image: 'BANCO_OCORRENCIA_OCORRENCIA.png' },
        { title: 'Site de Notícias', subtitle: 'Publicações e comunicados dos bancos', image: 'BANCO_OCORRENCIA_NOTICIA.png' },
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
      'CHART.JS': 'devicon-chartjs-plain',
      'C#': 'devicon-csharp-plain',
      'ASP.NET CORE': 'devicon-dot-net-plain',
      '.NET': 'devicon-dot-net-plain',
      '.NET 8': 'devicon-dot-net-plain',
      'SQL SERVER': 'devicon-microsoftsqlserver-plain',
      'DAPPER': 'devicon-microsoftsqlserver-plain',
      'RDLC': '',
      'FASTREPORT': '',
      'LIVECHARTS': '',
      'BCRYPT': '',
      'SQLITE': 'devicon-sqlite-plain',
      'EXPO': 'devicon-react-original',
      'PRISMA': 'devicon-prisma-original',
      'AWS S3': 'devicon-amazonwebservices-plain',
      'SWAGGER': 'devicon-swagger-plain',
      'VERCEL': 'devicon-vercel-plain',
      'JWT': 'devicon-nodejs-plain',
      'RENDER': '',
      'HOSTINGER': '',
    };
    return icons[tag] ?? '';
  }
}
