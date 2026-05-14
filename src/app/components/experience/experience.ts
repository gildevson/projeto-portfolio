import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';

interface Job {
  period: string;
  role: string;
  company: string;
  logo: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements AfterViewInit {
  @ViewChildren('animated') items!: QueryList<ElementRef>;

  jobs: Job[] = [
    {
      period: 'Julho 2024 — Atualmente',
      role: 'Analista de Sistemas Pleno',
      company: 'Finanblue',
      logo: 'logo_finanblue.png',
      description: 'Criação de relatórios complexos com Crystal Reports e manutenção de bancos de dados SQL Server. Atendimento ao cliente para entendimento de necessidades e entrega de soluções eficazes. Participação em migração de servidores, manutenção de views e geração de insights estratégicos através de relatórios. Evolução do suporte técnico para papel ativo de desenvolvedor.',
      tags: ['Crystal Reports', 'SQL Server', 'Migração de Servidores', 'Criação de Relatórios', 'Manutenção de Views', 'Migração de Dados'],
    },
    {
      period: 'Julho 2022 — Junho 2024',
      role: 'Analista de Sistemas Jr.',
      company: 'Finanblue',
      logo: 'logo_finanblue.png',
      description: 'Desenvolvimento e manutenção de relatórios com Crystal Reports e SQL Server. Atendimento ao cliente com foco em soluções eficazes. Participação em migração de servidores, garantindo transições com mínimo tempo de inatividade. Manutenção de views e criação de relatórios para suporte a decisões estratégicas.',
      tags: ['Crystal Reports', 'SQL Server', 'Atendimento ao Cliente', 'Migração de Servidores', 'Criação de Relatórios', 'Manutenção de Views'],
    },
    {
      period: 'Junho 2022 — Julho 2023',
      role: 'Negociador de Título de Crédito',
      company: 'Bellinati Perez',
      logo: 'belinatti.png',
      description: 'Cobrança de títulos da carteira do Itaú, com contato direto a clientes para negociação e regularização de pendências financeiras. Análise de contas, elaboração de estratégias de cobrança e manutenção de registros detalhados. Foco na recuperação de créditos de forma eficiente e profissional, preservando o relacionamento com o cliente.',
      tags: ['Negociação', 'Análise de Crédito', 'Atendimento ao Cliente', 'Cobrança'],
    },
    {
      period: 'Janeiro 2022 — Julho 2022',
      role: 'Analista de Suporte — Estágio',
      company: 'Unifatec',
      logo: 'unifatec.png',
      description: 'Suporte técnico a professores e alunos, com manutenção de hardware e solução de problemas técnicos. Configuração de computadores, suporte em redes e software, garantindo o funcionamento contínuo dos equipamentos em ambiente acadêmico.',
      tags: ['Manutenção de Hardware', 'Cabeamento de Rede', 'Suporte Técnico'],
    },
  ];

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
      { threshold: 0.1 }
    );
    this.items.forEach(el => observer.observe(el.nativeElement));
  }
}
