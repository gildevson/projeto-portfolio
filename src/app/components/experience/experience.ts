import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, inject } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { LanguageService } from '../../services/language.service';

interface I18n { pt: string; en: string; }

interface Job {
  period: string;
  role: I18n;
  company: string;
  logo: string;
  description: I18n;
  tags: string[];
}

@Component({
  selector: 'app-experience',
  imports: [TranslatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements AfterViewInit {
  @ViewChildren('animated') items!: QueryList<ElementRef>;
  lang = inject(LanguageService).lang;

  jobs: Job[] = [
    {
      period: 'Julho 2024 — Atualmente',
      role: {
        pt: 'Analista de Sistemas Pleno',
        en: 'Mid-Level Systems Analyst',
      },
      company: 'Finanblue',
      logo: 'logo_finanblue.png',
      description: {
        pt: 'Criação de relatórios complexos com Crystal Reports e manutenção de bancos de dados SQL Server. Atendimento ao cliente para entendimento de necessidades e entrega de soluções eficazes. Participação em migração de servidores, manutenção de views e geração de insights estratégicos através de relatórios. Evolução do suporte técnico para papel ativo de desenvolvedor.',
        en: 'Creation of complex reports with Crystal Reports and SQL Server database maintenance. Client support to understand needs and deliver effective solutions. Participation in server migrations, view maintenance and generation of strategic insights through reports. Evolution from technical support to an active developer role.',
      },
      tags: ['Crystal Reports', 'SQL Server', 'Migração de Servidores', 'Criação de Relatórios', 'Manutenção de Views', 'Migração de Dados'],
    },
    {
      period: 'Julho 2022 — Junho 2024',
      role: {
        pt: 'Analista de Sistemas Jr.',
        en: 'Junior Systems Analyst',
      },
      company: 'Finanblue',
      logo: 'logo_finanblue.png',
      description: {
        pt: 'Desenvolvimento e manutenção de relatórios com Crystal Reports e SQL Server. Atendimento ao cliente com foco em soluções eficazes. Participação em migração de servidores, garantindo transições com mínimo tempo de inatividade. Manutenção de views e criação de relatórios para suporte a decisões estratégicas.',
        en: 'Development and maintenance of reports with Crystal Reports and SQL Server. Client service focused on effective solutions. Participation in server migrations ensuring transitions with minimum downtime. View maintenance and report creation to support strategic decisions.',
      },
      tags: ['Crystal Reports', 'SQL Server', 'Atendimento ao Cliente', 'Migração de Servidores', 'Criação de Relatórios', 'Manutenção de Views'],
    },
    {
      period: 'Junho 2022 — Julho 2023',
      role: {
        pt: 'Negociador de Título de Crédito',
        en: 'Credit Title Negotiator',
      },
      company: 'Bellinati Perez',
      logo: 'belinatti.png',
      description: {
        pt: 'Cobrança de títulos da carteira do Itaú, com contato direto a clientes para negociação e regularização de pendências financeiras. Análise de contas, elaboração de estratégias de cobrança e manutenção de registros detalhados. Foco na recuperação de créditos de forma eficiente e profissional, preservando o relacionamento com o cliente.',
        en: 'Collection of Itaú bank portfolio titles with direct client contact for negotiating and regularising financial pendencies. Account analysis, debt collection strategy development and detailed record maintenance. Focus on efficient and professional credit recovery, preserving client relationships.',
      },
      tags: ['Negociação', 'Análise de Crédito', 'Atendimento ao Cliente', 'Cobrança'],
    },
    {
      period: 'Janeiro 2022 — Julho 2022',
      role: {
        pt: 'Analista de Suporte — Estágio',
        en: 'IT Support Analyst — Intern',
      },
      company: 'Unifatec',
      logo: 'unifatec.png',
      description: {
        pt: 'Suporte técnico a professores e alunos, com manutenção de hardware e solução de problemas técnicos. Configuração de computadores, suporte em redes e software, garantindo o funcionamento contínuo dos equipamentos em ambiente acadêmico.',
        en: 'Technical support for teachers and students, with hardware maintenance and troubleshooting. Computer setup, network and software support, ensuring continuous operation of equipment in an academic environment.',
      },
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
