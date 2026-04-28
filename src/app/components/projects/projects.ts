import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface Project {
  id: string;
  label: string;
  period: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  color: string;
  featured: boolean;
  mockups: { title: string; subtitle: string }[];
}

@Component({
  selector: 'app-projects',
  imports: [NgClass],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  activeId = signal('finanblue');
  showAll = signal(false);

  projects: Project[] = [
    {
      id: 'finanblue',
      label: 'Finanblue',
      featured: true,
      period: 'Brasil · 2023–2025',
      title: 'Finanblue · Portal Financeiro',
      description: 'Desenvolvimento do portal interno de gestão financeira, com dashboards em tempo real, relatórios automatizados e fluxo de aprovação de pagamentos.',
      bullets: [
        'Construção do front-end completo com Angular e integração com APIs REST',
        'Redução de 40% no tempo de geração de relatórios com otimizações de consulta',
        'Implementação de autenticação SSO e controle de permissões por perfil',
      ],
      tags: ['ANGULAR', 'NODE.JS', 'POSTGRESQL', 'REST API'],
      color: '#3b82f6',
      mockups: [
        { title: 'Dashboard Financeiro', subtitle: 'Visão geral em tempo real' },
        { title: 'Relatórios', subtitle: 'Exportação automatizada' },
        { title: 'Gestão de Usuários', subtitle: 'Controle de acesso' },
        { title: 'Fluxo de Aprovação', subtitle: 'Workflow de pagamentos' },
      ],
    },
    {
      id: 'ecommerce',
      label: 'E-commerce',
      featured: true,
      period: 'Brasil · 2022–2023',
      title: 'Plataforma · E-commerce',
      description: 'Plataforma de e-commerce completa com catálogo de produtos, carrinho, checkout com gateway de pagamento e painel administrativo.',
      bullets: [
        'Integração com Stripe e PagSeguro para processamento de pagamentos',
        'Sistema de busca com filtros dinâmicos e paginação performática',
        'Painel admin para gestão de estoque, pedidos e clientes',
      ],
      tags: ['REACT', 'NODE.JS', 'MONGODB', 'STRIPE'],
      color: '#10b981',
      mockups: [
        { title: 'Catálogo de Produtos', subtitle: 'Listagem com filtros' },
        { title: 'Página do Produto', subtitle: 'Detalhes e variações' },
        { title: 'Checkout', subtitle: 'Fluxo de pagamento' },
        { title: 'Painel Admin', subtitle: 'Gestão de pedidos' },
      ],
    },
    {
      id: 'saas',
      label: 'SaaS App',
      featured: true,
      period: 'Brasil · 2024',
      title: 'SaaS · Gestão de Tarefas',
      description: 'Aplicação SaaS para gestão de tarefas e projetos em equipe, com colaboração em tempo real, notificações e integrações via webhooks.',
      bullets: [
        'Comunicação em tempo real com WebSockets para colaboração simultânea',
        'Sistema de notificações push e e-mail para atualizações de tarefas',
        'Integração com GitHub e Slack via webhooks configuráveis',
      ],
      tags: ['ANGULAR', 'WEBSOCKET', 'EXPRESS', 'DOCKER'],
      color: '#8b5cf6',
      mockups: [
        { title: 'Board de Projetos', subtitle: 'Kanban em tempo real' },
        { title: 'Timeline', subtitle: 'Visão por período' },
        { title: 'Notificações', subtitle: 'Central de alertas' },
        { title: 'Integrações', subtitle: 'Webhooks e APIs' },
      ],
    },
    {
      id: 'banco-ocorrencias',
      label: 'Banco de Ocorrências',
      featured: false,
      period: 'Brasil · 2023',
      title: 'Banco de Ocorrências · Gestão Interna',
      description: 'Sistema interno para registro e acompanhamento de ocorrências operacionais, com fluxo de aprovação e geração de relatórios.',
      bullets: [
        'Módulo de registro com categorização e prioridade de ocorrências',
        'Painel de acompanhamento com filtros e busca avançada',
        'Relatórios em PDF e Excel para auditoria e compliance',
      ],
      tags: ['ANGULAR', 'C#', 'SQL SERVER', '.NET'],
      color: '#f59e0b',
      mockups: [
        { title: 'Registro de Ocorrência', subtitle: 'Formulário categorizado' },
        { title: 'Painel de Controle', subtitle: 'Listagem e filtros' },
        { title: 'Relatórios', subtitle: 'Exportação PDF/Excel' },
        { title: 'Histórico', subtitle: 'Timeline de eventos' },
      ],
    },
    {
      id: 'api-gateway',
      label: 'API Gateway',
      featured: false,
      period: 'Brasil · 2024',
      title: 'API Gateway · Microsserviços',
      description: 'Implementação de API Gateway para orquestração de microsserviços, com autenticação centralizada, rate limiting e monitoramento.',
      bullets: [
        'Roteamento dinâmico com load balancing entre instâncias',
        'Autenticação JWT centralizada com refresh token automático',
        'Dashboard de monitoramento com métricas em tempo real',
      ],
      tags: ['NODE.JS', 'DOCKER', 'NGINX', 'REDIS'],
      color: '#ef4444',
      mockups: [
        { title: 'Gateway Dashboard', subtitle: 'Monitoramento de rotas' },
        { title: 'Auth Service', subtitle: 'Gestão de tokens' },
        { title: 'Rate Limiting', subtitle: 'Controle de requisições' },
        { title: 'Logs', subtitle: 'Rastreamento de erros' },
      ],
    },
    {
      id: 'mobile-app',
      label: 'Mobile App',
      featured: false,
      period: 'Brasil · 2022',
      title: 'App Mobile · Finanças Pessoais',
      description: 'Aplicativo mobile para controle de finanças pessoais, com categorização automática de gastos, metas e notificações inteligentes.',
      bullets: [
        'Sincronização offline-first com resolução de conflitos',
        'Categorização automática de transações',
        'Widget para acompanhamento rápido na tela inicial',
      ],
      tags: ['REACT NATIVE', 'EXPO', 'SQLITE', 'FIREBASE'],
      color: '#ec4899',
      mockups: [
        { title: 'Dashboard', subtitle: 'Resumo financeiro' },
        { title: 'Transações', subtitle: 'Histórico categorizado' },
        { title: 'Metas', subtitle: 'Progresso visual' },
        { title: 'Relatórios', subtitle: 'Análise mensal' },
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

  openAll() {
    this.showAll.set(true);
  }

  closeAll() {
    this.showAll.set(false);
  }
}
