/*
=============================================================================
SEÇÃO: DATA DICTIONARY / DOCUMENTAÇÃO (DDL)
Objetivo: Descrever o propósito de negócios e técnico de cada objeto.
Autor: Database Architect
=============================================================================
*/

-- --------------------------------------------------------------------------
-- 1. CORE & CONFIGURAÇÕES (Agencies, Roles, Profiles, System)
-- --------------------------------------------------------------------------

COMMENT ON TABLE public.agencies IS 'Tabela central de multi-tenancy. Representa as imobiliárias ou empresas contratantes do sistema.';
COMMENT ON COLUMN public.agencies.id IS 'Identificador único (UUID) da agência.';
COMMENT ON COLUMN public.agencies.name IS 'Nome fantasia da agência.';
COMMENT ON COLUMN public.agencies.crm_agency_id IS 'ID de referência da agência no CRM externo (integração).';

COMMENT ON TABLE public.roles IS 'Define os níveis de acesso e papéis dos usuários no sistema (ex: Admin, Gerente, Agente).';
COMMENT ON COLUMN public.roles.id IS 'Identificador único do papel.';
COMMENT ON COLUMN public.roles.name IS 'Nome descritivo do papel (role).';

COMMENT ON TABLE public.profiles IS 'Representa os usuários (corretores/staff) vinculados a uma agência.';
COMMENT ON COLUMN public.profiles.id IS 'Identificador único do usuário.';
COMMENT ON COLUMN public.profiles.agency_id IS 'FK: Agência à qual o usuário pertence.';
COMMENT ON COLUMN public.profiles.full_name IS 'Nome completo do usuário.';
COMMENT ON COLUMN public.profiles.name IS 'Nome curto ou de exibição.';
COMMENT ON COLUMN public.profiles.role_id IS 'FK: Papel de acesso do usuário.';
COMMENT ON COLUMN public.profiles.avatar_url IS 'URL da foto de perfil.';
COMMENT ON COLUMN public.profiles.crm_code IS 'Código identificador do usuário no CRM de origem.';
COMMENT ON COLUMN public.profiles.updated_at IS 'Timestamp da última atualização do registro.';

COMMENT ON TABLE public.origins IS 'Classificação da origem do lead (ex: Portal, Facebook, Site).';
COMMENT ON COLUMN public.origins.id IS 'Identificador único da origem.';
COMMENT ON COLUMN public.origins.code IS 'Código textual da origem (slug).';
COMMENT ON COLUMN public.origins.agency_id IS 'FK: Agência proprietária.';
COMMENT ON COLUMN public.origins.description IS 'Descrição legível da origem.';
COMMENT ON COLUMN public.origins.created_at IS 'Data de criação.';

COMMENT ON TABLE public.properties IS 'Representa os empreendimentos ou imóveis alvo dos leads.';
COMMENT ON COLUMN public.properties.id IS 'Identificador único do imóvel/empreendimento.';
COMMENT ON COLUMN public.properties.code IS 'Código identificador do imóvel (ex: Referência).';
COMMENT ON COLUMN public.properties.agency_id IS 'FK: Agência proprietária.';
COMMENT ON COLUMN public.properties.created_at IS 'Data de criação.';

COMMENT ON TABLE public.agency_settings IS 'Armazena configurações globais específicas de cada agência.';
COMMENT ON COLUMN public.agency_settings.id IS 'Identificador único da configuração.';
COMMENT ON COLUMN public.agency_settings.agency_id IS 'FK: Agência vinculada.';

-- --------------------------------------------------------------------------
-- 2. AUDITORIA E NOTIFICAÇÕES
-- --------------------------------------------------------------------------

COMMENT ON TABLE public.audit_roulette_events IS 'Log técnico detalhado de todas as operações do motor de distribuição (Roleta).';
COMMENT ON COLUMN public.audit_roulette_events.id IS 'Identificador único do evento de auditoria.';
COMMENT ON COLUMN public.audit_roulette_events.occurred_at IS 'Data e hora exata do evento.';
COMMENT ON COLUMN public.audit_roulette_events.op_id IS 'Identificador da operação (trace ID) para agrupar logs de uma mesma requisição.';
COMMENT ON COLUMN public.audit_roulette_events.request_id IS 'ID da requisição HTTP ou Job.';
COMMENT ON COLUMN public.audit_roulette_events.actor_user_id IS 'ID do usuário que disparou a ação (se houver).';
COMMENT ON COLUMN public.audit_roulette_events.actor_display_name IS 'Nome do ator para exibição rápida.';
COMMENT ON COLUMN public.audit_roulette_events.actor_source IS 'Origem da ação (ex: API, Job, Admin).';
COMMENT ON COLUMN public.audit_roulette_events.agency_id IS 'FK: Contexto da agência.';
COMMENT ON COLUMN public.audit_roulette_events.rpc_name IS 'Nome da função/procedure executada (ex: distribute_lead).';
COMMENT ON COLUMN public.audit_roulette_events.duty_window_id IS 'FK Opcional: Janela de plantão envolvida.';
COMMENT ON COLUMN public.audit_roulette_events.daily_duty_id IS 'FK Opcional: Dia de plantão envolvido.';
COMMENT ON COLUMN public.audit_roulette_events.customized_queue_id IS 'FK Opcional: Fila customizada envolvida.';
COMMENT ON COLUMN public.audit_roulette_events.status IS 'Resultado da operação (ok, error, no_op).';
COMMENT ON COLUMN public.audit_roulette_events.error_code IS 'Código de erro em caso de falha.';
COMMENT ON COLUMN public.audit_roulette_events.error_message IS 'Mensagem descritiva do erro.';
COMMENT ON COLUMN public.audit_roulette_events.duration_ms IS 'Duração da execução em milissegundos.';
COMMENT ON COLUMN public.audit_roulette_events.minimal_params IS 'JSONB: Parâmetros de entrada minimizados.';
COMMENT ON COLUMN public.audit_roulette_events.before_state IS 'JSONB: Snapshot dos dados antes da alteração.';
COMMENT ON COLUMN public.audit_roulette_events.after_state IS 'JSONB: Snapshot dos dados após a alteração.';
COMMENT ON COLUMN public.audit_roulette_events.diff IS 'JSONB: Diferença computada entre os estados.';

COMMENT ON TABLE public.notifications IS 'Sistema de notificações in-app para usuários.';
COMMENT ON COLUMN public.notifications.id IS 'Identificador único da notificação.';
COMMENT ON COLUMN public.notifications.agency_id IS 'FK: Agência destinatária.';
COMMENT ON COLUMN public.notifications.type IS 'Categoria da notificação (ex: LEAD_NEW, SYSTEM_ALERT).';
COMMENT ON COLUMN public.notifications.title IS 'Título curto.';
COMMENT ON COLUMN public.notifications.message IS 'Corpo da mensagem.';
COMMENT ON COLUMN public.notifications.severity IS 'Nível de severidade (info, warning, error).';
COMMENT ON COLUMN public.notifications.is_read IS 'Flag indicando se foi lida.';
COMMENT ON COLUMN public.notifications.related_entity_type IS 'Nome da tabela relacionada (polimorfismo lógico).';
COMMENT ON COLUMN public.notifications.related_entity_id IS 'ID do registro relacionado.';
COMMENT ON COLUMN public.notifications.created_at IS 'Data de envio.';
COMMENT ON COLUMN public.notifications.read_at IS 'Data de leitura.';

-- --------------------------------------------------------------------------
-- 3. DOMÍNIO DE PLANTÕES (Rostering - Prefix: ro_)
-- --------------------------------------------------------------------------

COMMENT ON TABLE public.ro_duties IS 'Definição macro de um Plantão (ex: Plantão Vendas Online).';
COMMENT ON COLUMN public.ro_duties.id IS 'Identificador único do plantão.';
COMMENT ON COLUMN public.ro_duties.code IS 'Código identificador (slug).';
COMMENT ON COLUMN public.ro_duties.agency_id IS 'FK: Agência proprietária.';
COMMENT ON COLUMN public.ro_duties.is_active IS 'Indica se o plantão está ativo para uso.';
COMMENT ON COLUMN public.ro_duties.is_default IS 'Indica se é o plantão padrão da agência.';
COMMENT ON COLUMN public.ro_duties.created_at IS 'Data de criação.';
COMMENT ON COLUMN public.ro_duties.updated_at IS 'Data de atualização.';

COMMENT ON TABLE public.ro_shift_types IS 'Tipos de turno dentro de um plantão (ex: Manhã, Tarde, Noite).';
COMMENT ON COLUMN public.ro_shift_types.id IS 'Identificador único do tipo de turno.';
COMMENT ON COLUMN public.ro_shift_types.code IS 'Código do turno.';
COMMENT ON COLUMN public.ro_shift_types.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.ro_shift_types.duty_id IS 'FK: Plantão pai.';
COMMENT ON COLUMN public.ro_shift_types.description IS 'Descrição do turno.';

COMMENT ON TABLE public.ro_shift_windows IS 'Janelas de horário que compõem um tipo de turno.';
COMMENT ON COLUMN public.ro_shift_windows.id IS 'Identificador único da janela.';
COMMENT ON COLUMN public.ro_shift_windows.duty_id IS 'FK: Plantão.';
COMMENT ON COLUMN public.ro_shift_windows.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.ro_shift_windows.shift_type_id IS 'FK: Tipo de turno.';
COMMENT ON COLUMN public.ro_shift_windows.window_seq IS 'Ordem sequencial da janela no dia.';
COMMENT ON COLUMN public.ro_shift_windows.time_start IS 'Hora de início.';
COMMENT ON COLUMN public.ro_shift_windows.time_end IS 'Hora de fim.';
COMMENT ON COLUMN public.ro_shift_windows.created_at IS 'Data de criação.';
COMMENT ON COLUMN public.ro_shift_windows.updated_at IS 'Data de atualização.';

COMMENT ON TABLE public.ro_daily_duties IS 'Instância diária de um plantão (Agenda do dia).';
COMMENT ON COLUMN public.ro_daily_duties.id IS 'Identificador único da instância diária.';
COMMENT ON COLUMN public.ro_daily_duties.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.ro_daily_duties.duty_id IS 'FK: Definição do plantão.';
COMMENT ON COLUMN public.ro_daily_duties.roster_date IS 'Data específica do calendário.';
COMMENT ON COLUMN public.ro_daily_duties.shift_type_id IS 'FK: Tipo de turno ativo neste dia.';
COMMENT ON COLUMN public.ro_daily_duties.created_at IS 'Data de criação.';

COMMENT ON TABLE public.ro_duty_windows IS 'Instância da janela de horário em um dia específico.';
COMMENT ON COLUMN public.ro_duty_windows.id IS 'Identificador único.';
COMMENT ON COLUMN public.ro_duty_windows.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.ro_duty_windows.daily_duty_id IS 'FK: Instância do dia.';
COMMENT ON COLUMN public.ro_duty_windows.shift_window_id IS 'FK: Definição da janela de horário.';
COMMENT ON COLUMN public.ro_duty_windows.is_active IS 'Se a janela está ativa naquele dia.';
COMMENT ON COLUMN public.ro_duty_windows.created_at IS 'Data de criação.';
COMMENT ON COLUMN public.ro_duty_windows.updated_at IS 'Data de atualização.';

COMMENT ON TABLE public.ro_duty_positions IS 'Fila ordenada de corretores para uma janela específica de um dia.';
COMMENT ON COLUMN public.ro_duty_positions.id IS 'Identificador único da posição.';
COMMENT ON COLUMN public.ro_duty_positions.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.ro_duty_positions.duty_window_id IS 'FK: Janela do dia.';
COMMENT ON COLUMN public.ro_duty_positions.profile_id IS 'FK: Corretor posicionado.';
COMMENT ON COLUMN public.ro_duty_positions.position_order IS 'Número da posição na fila (1, 2, 3...).';
COMMENT ON COLUMN public.ro_duty_positions.created_at IS 'Data de criação.';
COMMENT ON COLUMN public.ro_duty_positions.updated_at IS 'Data de atualização.';

-- --------------------------------------------------------------------------
-- 4. FILAS CUSTOMIZADAS (Custom Queues)
-- --------------------------------------------------------------------------

COMMENT ON TABLE public.ro_customized_queues IS 'Filas de distribuição baseadas em regras específicas (Meta-ads, Produto, Origem).';
COMMENT ON COLUMN public.ro_customized_queues.id IS 'Identificador único da fila customizada.';
COMMENT ON COLUMN public.ro_customized_queues.code IS 'Código identificador.';
COMMENT ON COLUMN public.ro_customized_queues.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.ro_customized_queues.source IS 'Fonte da regra (CAMPAIGN_META ou BUSINESS_RULE).';
COMMENT ON COLUMN public.ro_customized_queues.description IS 'Descrição da fila.';
COMMENT ON COLUMN public.ro_customized_queues.property_id IS 'FK Opcional: Filtro por produto.';
COMMENT ON COLUMN public.ro_customized_queues.origin_id IS 'FK Opcional: Filtro por origem.';
COMMENT ON COLUMN public.ro_customized_queues.external_campaign_name IS 'Nome da campanha externa para match.';
COMMENT ON COLUMN public.ro_customized_queues.is_active IS 'Indica se a fila está ativa.';
COMMENT ON COLUMN public.ro_customized_queues.created_at IS 'Data de criação.';
COMMENT ON COLUMN public.ro_customized_queues.updated_at IS 'Data de atualização.';

COMMENT ON TABLE public.ro_customized_positions IS 'Fila ordenada de corretores para uma fila customizada.';
COMMENT ON COLUMN public.ro_customized_positions.id IS 'Identificador único da posição.';
COMMENT ON COLUMN public.ro_customized_positions.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.ro_customized_positions.customized_queue_id IS 'FK: Fila customizada.';
COMMENT ON COLUMN public.ro_customized_positions.profile_id IS 'FK: Corretor.';
COMMENT ON COLUMN public.ro_customized_positions.position_order IS 'Posição na fila.';
COMMENT ON COLUMN public.ro_customized_positions.created_at IS 'Data de criação.';
COMMENT ON COLUMN public.ro_customized_positions.updated_at IS 'Data de atualização.';

-- --------------------------------------------------------------------------
-- 5. ESTRATÉGIAS DE DISTRIBUIÇÃO
-- --------------------------------------------------------------------------

COMMENT ON TABLE public.strategies IS 'Define a lógica de distribuição a ser aplicada (Plantão, Roleta Custom, Agenciador, etc).';
COMMENT ON COLUMN public.strategies.id IS 'Identificador único da estratégia.';
COMMENT ON COLUMN public.strategies.code IS 'Código da estratégia.';
COMMENT ON COLUMN public.strategies.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.strategies.strategy_type IS 'Tipo: PLANTAO, ROLETA_CUSTOM, ATUALIZADO, AGENCIADOR, GRUPO.';
COMMENT ON COLUMN public.strategies.name IS 'Nome de exibição.';
COMMENT ON COLUMN public.strategies.description IS 'Descrição detalhada.';
COMMENT ON COLUMN public.strategies.is_singleton IS 'Flag técnica para estratégias únicas por agência.';
COMMENT ON COLUMN public.strategies.duty_id IS 'FK: Vínculo se o tipo for PLANTAO.';
COMMENT ON COLUMN public.strategies.customized_queue_id IS 'FK: Vínculo se o tipo for ROLETA_CUSTOM.';
COMMENT ON COLUMN public.strategies.fallback_enabled IS 'Indica se permite transbordo (fallback) em caso de falha.';
COMMENT ON COLUMN public.strategies.is_active IS 'Indica se a estratégia está ativa.';
COMMENT ON COLUMN public.strategies.created_at IS 'Data de criação.';
COMMENT ON COLUMN public.strategies.updated_at IS 'Data de atualização.';

COMMENT ON TABLE public.agency_fallback_strategies IS 'Define a ordem de estratégias de backup caso a principal falhe.';
COMMENT ON COLUMN public.agency_fallback_strategies.id IS 'Identificador único.';
COMMENT ON COLUMN public.agency_fallback_strategies.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.agency_fallback_strategies.strategy_id IS 'FK: Estratégia de destino do fallback.';
COMMENT ON COLUMN public.agency_fallback_strategies.fallback_order IS 'Ordem de execução (1, 2...).';
COMMENT ON COLUMN public.agency_fallback_strategies.is_active IS 'Flag de ativação.';
COMMENT ON COLUMN public.agency_fallback_strategies.created_at IS 'Data de criação.';
COMMENT ON COLUMN public.agency_fallback_strategies.updated_at IS 'Data de atualização.';

-- --------------------------------------------------------------------------
-- 6. DISTRIBUIÇÃO E EXECUÇÃO (Leads, Deals, Attempts - Prefix: rp_)
-- --------------------------------------------------------------------------

COMMENT ON TABLE public.rp_leads IS 'Cadastro base do Lead (Pessoa) importado do CRM.';
COMMENT ON COLUMN public.rp_leads.id IS 'Identificador único do Lead.';
COMMENT ON COLUMN public.rp_leads.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.rp_leads.crm_lead_id IS 'ID original do lead no CRM.';
COMMENT ON COLUMN public.rp_leads.name IS 'Nome do lead.';
COMMENT ON COLUMN public.rp_leads.phone IS 'Telefone de contato.';
COMMENT ON COLUMN public.rp_leads.email IS 'Email de contato.';
COMMENT ON COLUMN public.rp_leads.created_at IS 'Data de importação.';
COMMENT ON COLUMN public.rp_leads.updated_at IS 'Data de atualização.';

COMMENT ON TABLE public.rp_deals IS 'Oportunidade de negócio específica gerada para um Lead.';
COMMENT ON COLUMN public.rp_deals.id IS 'Identificador único do Deal (Oportunidade).';
COMMENT ON COLUMN public.rp_deals.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.rp_deals.lead_id IS 'FK: Lead vinculado.';
COMMENT ON COLUMN public.rp_deals.property_id IS 'FK: Imóvel de interesse.';
COMMENT ON COLUMN public.rp_deals.origin_id IS 'FK: Origem do lead.';
COMMENT ON COLUMN public.rp_deals.outside_hours IS 'Flag: Lead chegou fora do horário comercial?';
COMMENT ON COLUMN public.rp_deals.interest IS 'Tipo de interesse (BUY, RENT).';
COMMENT ON COLUMN public.rp_deals.crm_card_id IS 'ID do Card/Negócio no CRM.';
COMMENT ON COLUMN public.rp_deals.crm_card_status IS 'Status no CRM (NEW, OUTDATED, UPDATED).';
COMMENT ON COLUMN public.rp_deals.crm_card_outdated_by_agent IS 'FK: Agente que detém o card desatualizado (se houver).';
COMMENT ON COLUMN public.rp_deals.strategy_id IS 'FK: Estratégia selecionada para este deal.';
COMMENT ON COLUMN public.rp_deals.has_manual_redirect IS 'Flag: Houve redirecionamento manual?';
COMMENT ON COLUMN public.rp_deals.is_valid IS 'Soft Delete: O deal é válido para processamento?';
COMMENT ON COLUMN public.rp_deals.invalidated_at IS 'Data de invalidação.';
COMMENT ON COLUMN public.rp_deals.invalidated_by IS 'FK: Usuário que invalidou.';
COMMENT ON COLUMN public.rp_deals.invalidation_reason IS 'Motivo da invalidação.';
COMMENT ON COLUMN public.rp_deals.deal_status IS 'Status do processamento (IN_QUEUE, DISTRIBUTED, etc).';
COMMENT ON COLUMN public.rp_deals.created_at IS 'Data de criação.';
COMMENT ON COLUMN public.rp_deals.updated_at IS 'Data de atualização.';

COMMENT ON TABLE public.rp_deal_queues IS 'Fila de processamento assíncrono para distribuição dos deals.';
COMMENT ON COLUMN public.rp_deal_queues.id IS 'Identificador único da fila.';
COMMENT ON COLUMN public.rp_deal_queues.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.rp_deal_queues.lead_id IS 'FK: Lead.';
COMMENT ON COLUMN public.rp_deal_queues.deal_id IS 'FK: Deal.';
COMMENT ON COLUMN public.rp_deal_queues.queue_type IS 'Tipo de fila (ex: WAITING_PARENT, READY).';
COMMENT ON COLUMN public.rp_deal_queues.parent_deal_id IS 'FK: Deal pai (se estiver aguardando agrupamento).';
COMMENT ON COLUMN public.rp_deal_queues.reserved_profile_id IS 'FK: Agente reservado preventivamente (sticky routing).';
COMMENT ON COLUMN public.rp_deal_queues.metadata IS 'JSONB: Metadados extras para o processamento.';
COMMENT ON COLUMN public.rp_deal_queues.created_at IS 'Data de entrada na fila.';
COMMENT ON COLUMN public.rp_deal_queues.updated_at IS 'Última atualização.';

COMMENT ON TABLE public.rp_attempts IS 'Tentativas de contato (Links gerados para aceite do lead).';
COMMENT ON COLUMN public.rp_attempts.id IS 'Identificador único da tentativa.';
COMMENT ON COLUMN public.rp_attempts.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.rp_attempts.path_link IS 'Slug único do link gerado (rastreio).';
COMMENT ON COLUMN public.rp_attempts.message_id IS 'ID da mensagem enviada (ex: WhatsApp ID).';
COMMENT ON COLUMN public.rp_attempts.deal_id IS 'FK: Deal associado.';
COMMENT ON COLUMN public.rp_attempts.profile_id IS 'FK: Corretor alvo desta tentativa.';
COMMENT ON COLUMN public.rp_attempts.strategy_id IS 'FK: Estratégia que gerou a tentativa.';
COMMENT ON COLUMN public.rp_attempts.attempt_seq IS 'Número da tentativa (1ª, 2ª, 3ª...).';
COMMENT ON COLUMN public.rp_attempts.attempt_type IS 'Tipo (PRIMARY ou FALLBACK).';
COMMENT ON COLUMN public.rp_attempts.observation_redirect IS 'Observações sobre redirecionamento.';
COMMENT ON COLUMN public.rp_attempts.sent_at IS 'Data de envio.';
COMMENT ON COLUMN public.rp_attempts.clicked_at IS 'Data do clique (aceite/interação).';
COMMENT ON COLUMN public.rp_attempts.expired_at IS 'Data limite para interação.';
COMMENT ON COLUMN public.rp_attempts.status_link IS 'Status do link (WAITING, ACCEPTED, EXPIRED).';

COMMENT ON TABLE public.rp_deals_agents IS 'Registro final da atribuição (Match) entre Deal e Agente.';
COMMENT ON COLUMN public.rp_deals_agents.id IS 'Identificador único da atribuição.';
COMMENT ON COLUMN public.rp_deals_agents.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.rp_deals_agents.deal_id IS 'FK: Deal atribuído.';
COMMENT ON COLUMN public.rp_deals_agents.profile_id IS 'FK: Corretor vencedor.';
COMMENT ON COLUMN public.rp_deals_agents.accepted_attempt_id IS 'FK: Tentativa que resultou no aceite.';
COMMENT ON COLUMN public.rp_deals_agents.assigned_strategy_id IS 'FK: Estratégia que efetivou a atribuição.';
COMMENT ON COLUMN public.rp_deals_agents.assigned_seq IS 'Sequência em que foi atribuído.';
COMMENT ON COLUMN public.rp_deals_agents.assigned_type IS 'Tipo de atribuição (PRIMARY, FALLBACK).';
COMMENT ON COLUMN public.rp_deals_agents.assigned_at IS 'Data da atribuição.';
COMMENT ON COLUMN public.rp_deals_agents.is_active IS 'Indica se esta é a atribuição ativa atual.';

COMMENT ON TABLE public.rp_deals_executions IS 'Log de execução do processamento do Deal (Diagnóstico).';
COMMENT ON COLUMN public.rp_deals_executions.id IS 'Identificador único.';
COMMENT ON COLUMN public.rp_deals_executions.deal_id IS 'FK: Deal processado.';
COMMENT ON COLUMN public.rp_deals_executions.agency_id IS 'FK: Agência.';
COMMENT ON COLUMN public.rp_deals_executions.log IS 'Texto detalhado dos passos executados.';
COMMENT ON COLUMN public.rp_deals_executions.additional_info IS 'Informações extras de debug.';
COMMENT ON COLUMN public.rp_deals_executions.created_at IS 'Data de criação.';
COMMENT ON COLUMN public.rp_deals_executions.updated_at IS 'Data de atualização.';