import { Component, signal, inject } from '@angular/core';
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
  mockups: { title: string; subtitle: string }[];
}

@Component({
  selector: 'app-projects',
  imports: [NgClass, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  activeId = signal('finanblue');
  showAll = signal(false);
  lang = inject(LanguageService).lang;

  projects: Project[] = [
    {
      id: 'finanblue',
      label: 'Finanblue',
      featured: true,
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
      id: 'ecommerce',
      label: 'E-commerce',
      featured: true,
      period: 'Brasil · 2022–2023',
      title: {
        pt: 'Plataforma · E-commerce',
        en: 'Platform · E-commerce',
      },
      description: {
        pt: 'Plataforma de e-commerce completa com catálogo de produtos, carrinho, checkout com gateway de pagamento e painel administrativo.',
        en: 'Full e-commerce platform with product catalogue, cart, checkout with payment gateway and admin dashboard.',
      },
      bullets: [
        { pt: 'Integração com Stripe e PagSeguro para processamento de pagamentos', en: 'Stripe and PagSeguro integration for payment processing' },
        { pt: 'Sistema de busca com filtros dinâmicos e paginação performática', en: 'Search system with dynamic filters and performant pagination' },
        { pt: 'Painel admin para gestão de estoque, pedidos e clientes', en: 'Admin panel for inventory, order and customer management' },
      ],
      tags: ['REACT', 'NODE.JS', 'MONGODB', 'STRIPE'],
      color: '#10b981',
      mockups: [
        { title: 'Catálogo de Produtos', subtitle: 'Listagem com filtros' },
        { title: 'Página do Produto', subtitle: 'Detalhes e variações' },
        { title: 'Checkout', subtitle: 'Fluxo de pagamento' },
      ],
    },
    {
      id: 'saas',
      label: 'SaaS App',
      featured: true,
      period: 'Brasil · 2024',
      title: {
        pt: 'SaaS · Gestão de Tarefas',
        en: 'SaaS · Task Management',
      },
      description: {
        pt: 'Aplicação SaaS para gestão de tarefas e projetos em equipe, com colaboração em tempo real, notificações e integrações via webhooks.',
        en: 'SaaS application for team task and project management, with real-time collaboration, notifications and webhook integrations.',
      },
      bullets: [
        { pt: 'Comunicação em tempo real com WebSockets para colaboração simultânea', en: 'Real-time communication with WebSockets for simultaneous collaboration' },
        { pt: 'Sistema de notificações push e e-mail para atualizações de tarefas', en: 'Push and email notification system for task updates' },
        { pt: 'Integração com GitHub e Slack via webhooks configuráveis', en: 'GitHub and Slack integration via configurable webhooks' },
      ],
      tags: ['ANGULAR', 'WEBSOCKET', 'EXPRESS', 'DOCKER'],
      color: '#8b5cf6',
      mockups: [
        { title: 'Board de Projetos', subtitle: 'Kanban em tempo real' },
        { title: 'Timeline', subtitle: 'Visão por período' },
        { title: 'Notificações', subtitle: 'Central de alertas' },
      ],
    },
    {
      id: 'banco-ocorrencias',
      label: 'Banco de Ocorrências',
      featured: false,
      period: 'Brasil · 2023',
      title: {
        pt: 'Banco de Ocorrências · Gestão Interna',
        en: 'Incident Log · Internal Management',
      },
      description: {
        pt: 'Sistema interno para registro e acompanhamento de ocorrências operacionais, com fluxo de aprovação e geração de relatórios.',
        en: 'Internal system for recording and tracking operational incidents, with approval workflow and report generation.',
      },
      bullets: [
        { pt: 'Módulo de registro com categorização e prioridade de ocorrências', en: 'Registration module with incident categorisation and priority' },
        { pt: 'Painel de acompanhamento com filtros e busca avançada', en: 'Tracking dashboard with filters and advanced search' },
        { pt: 'Relatórios em PDF e Excel para auditoria e compliance', en: 'PDF and Excel reports for audit and compliance' },
      ],
      tags: ['ANGULAR', 'C#', 'SQL SERVER', '.NET'],
      color: '#f59e0b',
      mockups: [
        { title: 'Registro de Ocorrência', subtitle: 'Formulário categorizado' },
        { title: 'Painel de Controle', subtitle: 'Listagem e filtros' },
        { title: 'Relatórios', subtitle: 'Exportação PDF/Excel' },
      ],
    },
    {
      id: 'api-gateway',
      label: 'API Gateway',
      featured: false,
      period: 'Brasil · 2024',
      title: {
        pt: 'API Gateway · Microsserviços',
        en: 'API Gateway · Microservices',
      },
      description: {
        pt: 'Implementação de API Gateway para orquestração de microsserviços, com autenticação centralizada, rate limiting e monitoramento.',
        en: 'API Gateway implementation for microservice orchestration, with centralised authentication, rate limiting and monitoring.',
      },
      bullets: [
        { pt: 'Roteamento dinâmico com load balancing entre instâncias', en: 'Dynamic routing with load balancing across instances' },
        { pt: 'Autenticação JWT centralizada com refresh token automático', en: 'Centralised JWT authentication with automatic token refresh' },
        { pt: 'Dashboard de monitoramento com métricas em tempo real', en: 'Monitoring dashboard with real-time metrics' },
      ],
      tags: ['NODE.JS', 'DOCKER', 'NGINX', 'REDIS'],
      color: '#ef4444',
      mockups: [
        { title: 'Gateway Dashboard', subtitle: 'Monitoramento de rotas' },
        { title: 'Auth Service', subtitle: 'Gestão de tokens' },
        { title: 'Rate Limiting', subtitle: 'Controle de requisições' },
      ],
    },
    {
      id: 'mobile-app',
      label: 'Mobile App',
      featured: false,
      period: 'Brasil · 2022',
      title: {
        pt: 'App Mobile · Finanças Pessoais',
        en: 'Mobile App · Personal Finance',
      },
      description: {
        pt: 'Aplicativo mobile para controle de finanças pessoais, com categorização automática de gastos, metas e notificações inteligentes.',
        en: 'Mobile app for personal finance tracking, with automatic expense categorisation, goals and smart notifications.',
      },
      bullets: [
        { pt: 'Sincronização offline-first com resolução de conflitos', en: 'Offline-first sync with conflict resolution' },
        { pt: 'Categorização automática de transações', en: 'Automatic transaction categorisation' },
        { pt: 'Widget para acompanhamento rápido na tela inicial', en: 'Home screen widget for quick balance overview' },
      ],
      tags: ['REACT NATIVE', 'EXPO', 'SQLITE', 'FIREBASE'],
      color: '#ec4899',
      mockups: [
        { title: 'Dashboard', subtitle: 'Resumo financeiro' },
        { title: 'Transações', subtitle: 'Histórico categorizado' },
        { title: 'Metas', subtitle: 'Progresso visual' },
      ],
    },
  ];

  get featured(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  get current(): Project {
    return this.projects.find(p => p.id === this.activeId()) ?? this.projects[0];
  }

  select(id: string) {
    this.activeId.set(id);
    this.showAll.set(false);
  }

  openAll() { this.showAll.set(true); }
  closeAll() { this.showAll.set(false); }

  getTagIcon(tag: string): string {
    const icons: Record<string, string> = {
      'ANGULAR': 'devicon-angular-plain',
      'REACT': 'devicon-react-original',
      'REACT NATIVE': 'devicon-react-original',
      'NODE.JS': 'devicon-nodejs-plain',
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
    };
    return icons[tag] ?? '';
  }
}
