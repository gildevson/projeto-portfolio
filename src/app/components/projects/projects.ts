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
  mockups: { title: string; subtitle: string }[];
}

@Component({
  selector: 'app-projects',
  imports: [NgClass],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  active = signal(0);

  projects: Project[] = [
    {
      id: 'finanblue',
      label: 'Finanblue',
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
  ];

  select(index: number) {
    this.active.set(index);
  }

  get current(): Project {
    return this.projects[this.active()];
  }
}
