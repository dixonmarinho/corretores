import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 1. Importe estas duas linhas
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 2. Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Agent Flow API') // Nome do seu projeto
    .setDescription('Documentação da API do Agent Flow')
    .setVersion('1.0')

    .addTag(
      'RolettePosition',
      'Gerenciamento das posições na roleta de distribuição.',
    )

    // Core & Configurações
    .addTag(
      'Agencies',
      'Tabela central de multi-tenancy. Representa as imobiliárias ou empresas contratantes do sistema.',
    )
    .addTag(
      'Roles',
      'Define os níveis de acesso e papéis dos usuários no sistema (ex: Admin, Gerente, Agente).',
    )
    .addTag(
      'Profiles',
      'Representa os usuários (corretores/staff) vinculados a uma agência.',
    )
    .addTag(
      'Origins',
      'Classificação da origem do lead (ex: Portal, Facebook, Site).',
    )
    .addTag(
      'Properties',
      'Representa os empreendimentos ou imóveis alvo dos leads.',
    )
    .addTag(
      'AgencySettings',
      'Armazena configurações globais específicas de cada agência.',
    )

    // Auditoria e Notificações
    .addTag('Notifications', 'Sistema de notificações in-app para usuários.')

    // Domínio de Plantões (Rostering)
    .addTag(
      'RoDuties',
      'Definição macro de um Plantão (ex: Plantão Vendas Online).',
    )
    .addTag(
      'RoShiftTypes',
      'Tipos de turno dentro de um plantão (ex: Manhã, Tarde, Noite).',
    )
    .addTag(
      'RoShiftWindows',
      'Janelas de horário que compõem um tipo de turno.',
    )
    .addTag('RoDailyDuties', 'Instância diária de um plantão (Agenda do dia).')
    .addTag(
      'RoDutyWindows',
      'Instância da janela de horário em um dia específico.',
    )
    .addTag(
      'RoDutyPositions',
      'Fila ordenada de corretores para uma janela específica de um dia.',
    )

    // Filas Customizadas
    .addTag(
      'RoCustomizedQueues',
      'Filas de distribuição baseadas em regras específicas (Meta-ads, Produto, Origem).',
    )
    .addTag(
      'RoCustomizedPositions',
      'Fila ordenada de corretores para uma fila customizada.',
    )

    // Estratégias de Distribuição
    .addTag(
      'Strategies',
      'Define a lógica de distribuição a ser aplicada (Plantão, Roleta Custom, Agenciador, etc).',
    )
    .addTag(
      'AgencyFallbackStrategies',
      'Define a ordem de estratégias de backup caso a principal falhe.',
    )

    // Distribuição e Execução
    .addTag('RpLeads', 'Cadastro base do Lead (Pessoa) importado do CRM.')
    .addTag(
      'RpDeals',
      'Oportunidade de negócio específica gerada para um Lead.',
    )
    .addTag(
      'RpDealQueues',
      'Fila de processamento assíncrono para distribuição dos deals.',
    )
    .addTag(
      'RpAttempts',
      'Tentativas de contato (Links gerados para aceite do lead).',
    )
    .addTag(
      'RpDealsAgents',
      'Registro final da atribuição (Match) entre Deal e Agente.',
    )
    .addTag(
      'RpDealsExecutions',
      'Log de execução do processamento do Deal (Diagnóstico).',
    )

    .build();

  const document = SwaggerModule.createDocument(app, config);

  // A rota será: http://localhost:3000/api
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
