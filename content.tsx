import type { ReactNode } from 'react'
import {
  Activity,
  BookOpen,
  Braces,
  DatabaseBackup,
  FileText,
  Gauge,
  KeyRound,
  LockKeyhole,
  Network,
  Radar,
  ScrollText,
  ShieldCheck,
  SlidersHorizontal,
  TerminalSquare,
  UserCog,
} from 'lucide-react'

export type PublicDoc = {
  slug: string
  title: string
  description: string
  txtFile?: string
  docxFile?: string
  registryRequired?: boolean
}

export type DocTrack = {
  title: string
  audience: string
  description: string
  items: string[]
}

export type QuestionCard = {
  question: string
  answer: string
  where: string
  check: string
}

export type Scenario = {
  role: string
  goal: string
  steps: string[]
}

export type SystemArea = {
  icon: ReactNode
  area: string
  purpose: string
  location: string
  verification: string
}

export type Runbook = {
  title: string
  owner: string
  actions: string[]
}

export type SecurityControl = {
  title: string
  text: string
}

export const docTracks: DocTrack[] = [
  {
    title: 'Пользовательская документация',
    audience: 'Администратор, специалист безопасности, наблюдатель, разработчик',
    description:
      'Показывает, что делать в интерфейсе: где смотреть события, как выпускать политики, как разбирать блокировки, как контролировать качество детекторов и состояние защищённых станций.',
    items: [
      'быстрый старт и роли',
      'панель администратора',
      'станции и агенты',
      'политики безопасности',
      'события и расследование',
      'качество детекторов',
      'AI-угрозы и источники MITRE/OWASP',
      'отчёты и частые проблемы',
    ],
  },
  {
    title: 'Техническая документация',
    audience: 'DevOps, архитектор, инженер безопасности, команда внедрения',
    description:
      'Объясняет, как устроена платформа: control plane, admin UI, агент, PostgreSQL, Keycloak, Loki, OpenTelemetry, API-контракты, резервное копирование и восстановление.',
    items: [
      'архитектура и границы ответственности',
      'установка и обновление',
      'OIDC и роли Keycloak',
      'Loki и журналы событий',
      'PostgreSQL, миграции, backup/restore',
      'agent lifecycle',
      'API и схемы событий',
      'security model и threat model',
    ],
  },
]

export const questionCards: QuestionCard[] = [
  {
    question: 'Что делает платформа?',
    answer:
      'Guard/Takt защищает корпоративное использование AI: контролирует рабочие станции, применяет политики, маскирует чувствительные данные, фиксирует события и показывает состояние безопасности в админке.',
    where: 'Разделы «Обзор», «Станции», «Политики», «События» в админке.',
    check: 'Откройте health endpoint control plane и убедитесь, что в админке видны станции, опубликованная политика и последние события.',
  },
  {
    question: 'Где смотреть блокировки и причины?',
    answer:
      'Все решения агента попадают в события: поверхность, причина, уровень критичности, станция, агент, время и очищенный payload без исходных секретов.',
    where: 'Админка: «События» и карточка конкретного события.',
    check: 'Создайте тестовое событие агента, затем проверьте, что оно появилось в списке и не содержит raw secret или raw prompt.',
  },
  {
    question: 'Как работает политика?',
    answer:
      'Администратор создаёт snapshot политики, публикует его, агент получает snapshot через control plane и применяет правила локально на станции.',
    where: 'Админка: «Политики». Технически: contract policy snapshot и endpoint policy fetch.',
    check: 'Сравните опубликованный policy_id в админке и policy_id, полученный агентом при синхронизации.',
  },
  {
    question: 'Где видно качество детекторов?',
    answer:
      'Раздел качества показывает precision, recall, F1, покрытие corpus, версии detector/corpus и статус подписанной калибровки.',
    where: 'Админка: «Качество детекторов».',
    check: 'Запустите acceptance script Sprint 28 и проверьте, что desktop/mobile smoke не показывает overflow и таблица скроллится внутри.',
  },
  {
    question: 'Как отслеживаются MITRE ATLAS и OWASP GenAI/LLM Top 10?',
    answer:
      'Control plane периодически получает внешние источники, считает content hash, сохраняет snapshot и показывает delta: первый снимок, есть изменения или без изменений.',
    where: 'Админка: «AI-угрозы». API: /api/v1/security-intelligence/sources.',
    check: 'Нажмите «Проверить» и убедитесь, что у источников status ok, last_checked_at обновился, а delta объясняет изменение или его отсутствие.',
  },
  {
    question: 'Как подключены Keycloak и роли?',
    answer:
      'OIDC отвечает за вход, logout и session flow. Роли маппятся на administrator, security_officer, viewer и developer.',
    where: 'Техническая документация: OIDC/Keycloak. Админка: профиль текущего пользователя и доступность действий.',
    check: 'Пройдите login/logout для каждой роли и проверьте, что запрещённые действия недоступны в UI и API.',
  },
  {
    question: 'Где смотреть журналы и доставку в Loki?',
    answer:
      'События попадают в durable queue, затем отправляются в Loki с tenant/labels. При сбое очередь сохраняет состояние до flush.',
    where: 'Техническая документация: Loki и журналы. API: monitoring/queue status.',
    check: 'Создайте событие, выполните flush и найдите запись в Loki по labels.',
  },
  {
    question: 'Как понять, что сервис исправен?',
    answer:
      'Минимальная проверка включает API readiness, доступность админки в браузере, login flow, agent register, heartbeat, policy fetch и event sync.',
    where: 'Runbooks: health check, deployment check, incident response.',
    check: 'Не принимать только HTTP 200 по HTML. Нужен API ready и browser smoke без fatal state.',
  },
]

export const scenarios: Scenario[] = [
  {
    role: 'Администратор',
    goal: 'Выпустить рабочую политику безопасности',
    steps: [
      'Проверить состояние control plane и активных станций.',
      'Создать или импортировать policy snapshot.',
      'Проверить правила, ограничения и режим выполнения.',
      'Опубликовать snapshot.',
      'Убедиться, что агенты получили актуальный policy_id.',
    ],
  },
  {
    role: 'Специалист безопасности',
    goal: 'Разобрать срабатывание и снизить шум',
    steps: [
      'Открыть событие и проверить поверхность, причину и severity.',
      'Убедиться, что payload очищен и не раскрывает секреты.',
      'Сопоставить событие с политикой и детектором.',
      'Разметить качество как верное срабатывание, ложное срабатывание или пропуск.',
      'После накопления разметки утвердить подписанную калибровку.',
    ],
  },
  {
    role: 'Наблюдатель',
    goal: 'Проверить состояние внедрения без права изменения',
    steps: [
      'Открыть обзор и проверить доступность станций.',
      'Посмотреть опубликованную политику и последние события.',
      'Проверить AI-угрозы, матрицу OWASP/MITRE и OpenTelemetry mapping.',
      'Сформировать отчёт для внутреннего контроля.',
    ],
  },
]

export const systemAreas: SystemArea[] = [
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    area: 'Control plane',
    purpose: 'Принимает события, хранит политики, управляет агентами, ролями, качеством детекторов и AI security intelligence.',
    location: 'Сервис backend, API /api/v1/*.',
    verification: 'Проверить /health/ready, миграции БД и доступность ключевых API.',
  },
  {
    icon: <UserCog className="h-4 w-4" />,
    area: 'Admin UI',
    purpose: 'Рабочий интерфейс администратора: станции, события, политики, качество, AI-угрозы, пользователи и отчёты.',
    location: 'Web UI за nginx/PM2 или контейнером.',
    verification: 'Открыть в браузере, пройти login, проверить отсутствие overflow на desktop/mobile.',
  },
  {
    icon: <TerminalSquare className="h-4 w-4" />,
    area: 'Agent',
    purpose: 'Локально применяет политики, маскирует чувствительные данные, синхронизирует heartbeat, события и калибровки.',
    location: 'Рабочая станция или контейнерный runner.',
    verification: 'Agent register, heartbeat, policy fetch, event sync, calibration sync.',
  },
  {
    icon: <KeyRound className="h-4 w-4" />,
    area: 'Keycloak/OIDC',
    purpose: 'Вход, выход, session flow и role mapping для корпоративных ролей.',
    location: 'OIDC realm, client, redirect URL, группы ролей.',
    verification: 'Login/logout/session для administrator, security_officer, viewer, developer.',
  },
  {
    icon: <Activity className="h-4 w-4" />,
    area: 'Loki',
    purpose: 'Централизованное хранение журналов и событий с tenant/labels.',
    location: 'Loki endpoint и durable delivery queue.',
    verification: 'Создать событие, проверить queue status, flush и наличие записи в Loki.',
  },
  {
    icon: <DatabaseBackup className="h-4 w-4" />,
    area: 'PostgreSQL',
    purpose: 'Хранит пользователей, политики, события, threat-intel snapshots, calibration labels и служебное состояние.',
    location: 'PostgreSQL schema и миграции control plane.',
    verification: 'Миграции, backup, restore verification, tenant isolation check.',
  },
  {
    icon: <Radar className="h-4 w-4" />,
    area: 'MITRE/OWASP мониторинг',
    purpose: 'Следит за изменениями внешних источников AI security и показывает delta по content hash.',
    location: 'API /security-intelligence/sources и раздел «AI-угрозы».',
    verification: 'Manual check обновляет last_checked_at и сохраняет snapshot.',
  },
  {
    icon: <Braces className="h-4 w-4" />,
    area: 'API contracts',
    purpose: 'Фиксируют структуру policy snapshot, security events, detector quality и интеграционных endpoint.',
    location: 'Технические контракты и endpoint /api/v1/*.',
    verification: 'Contract tests и API smoke после деплоя.',
  },
]

export const runbooks: Runbook[] = [
  {
    title: 'Проверка после деплоя',
    owner: 'DevOps',
    actions: [
      'Проверить API readiness и состояние базы данных.',
      'Открыть web UI в браузере и пройти login.',
      'Проверить agent register, heartbeat, policy fetch и event sync.',
      'Проверить отсутствие fatal state в браузере.',
    ],
  },
  {
    title: 'Разбор инцидента',
    owner: 'Инженер эксплуатации',
    actions: [
      'Начать с public symptom: какая страница или API возвращает ошибку.',
      'Проверить backend readiness, PM2/container status и последние логи.',
      'Проверить PostgreSQL/Loki/Keycloak как внешние зависимости.',
      'После исправления подтвердить API и браузерным smoke, а не только HTML 200.',
    ],
  },
  {
    title: 'Обновление документации',
    owner: 'Product Squad',
    actions: [
      'Для каждой фичи обновить пользовательский сценарий.',
      'Для каждого API/интеграции обновить технический раздел.',
      'QA проверяет, что инструкция воспроизводится.',
      'Security проверяет, что опубликованный текст не раскрывает секреты или внутренние данные клиентов.',
    ],
  },
]

export const securityControls: SecurityControl[] = [
  {
    title: 'Zero-knowledge события',
    text: 'В документации и UI запрещено показывать исходные секреты, raw prompt, source code и command output. Публикуются только очищенные агрегаты и безопасные evidence-классы.',
  },
  {
    title: 'Ролевой доступ',
    text: 'Документация явно разделяет действия administrator, security_officer, viewer и developer. Если роль не может выполнить действие, это должно быть отражено в сценарии.',
  },
  {
    title: 'Актуальность',
    text: 'Каждая страница должна иметь владельца, дату обновления и проверяемый источник: UI route, API endpoint, runbook или acceptance script.',
  },
]

export const publicDocs: PublicDoc[] = [
  {
    slug: 'functional-spec',
    title: 'Описание функциональных характеристик программного обеспечения',
    description:
      'Назначение, пользовательские и административные функции, архитектурные модули и сценарии применения.',
    txtFile: 'opisanie_funkcionalnyh_harakteristik_po_tehkatalist_ii.txt',
    registryRequired: true,
  },
  {
    slug: 'installation-guide',
    title: 'Документация по установке программного обеспечения',
    description:
      'Развертывание, настройка окружения, зависимости, база данных и первый запуск.',
    txtFile: 'dokumentaciya_po_ustanovke_po_tehkatalist_ii.txt',
    registryRequired: true,
  },
  {
    slug: 'operations-guide',
    title: 'Документация по эксплуатации программного обеспечения',
    description:
      'Работа с ролями, типовые сценарии, ограничения, сопровождение и диагностика.',
    txtFile: 'dokumentaciya_po_ekspluatacii_po_tehkatalist_ii.txt',
    registryRequired: true,
  },
  {
    slug: 'product-overview',
    title: 'Продукт и правовой статус',
    description:
      'Общее описание программного продукта, классификация, модель предоставления и сведения об исключительном праве.',
    txtFile: 'spravka_samostoyatelnoe_sozdanie_po_techcatalyst_ai.txt',
    docxFile: 'spravka_samostoyatelnoe_sozdanie_po_techcatalyst_ai.docx',
  },
  {
    slug: 'architecture',
    title: 'Техническая архитектура',
    description:
      'Frontend, backend, база данных, API, маршрутизация, мониторинг и биллинг.',
    txtFile: 'opisanie_tehnicheskoy_arhitektury_techcatalyst_ai.txt',
    docxFile: 'opisanie_tehnicheskoy_arhitektury_techcatalyst_ai.docx',
  },
  {
    slug: 'storage-and-build',
    title: 'Хранение и сборка',
    description:
      'Где хранятся исходники и сборочные артефакты, как выполняется production build.',
    txtFile: 'opisanie_sredstv_hraneniya_i_kompilyacii_techcatalyst_ai.txt',
    docxFile: 'opisanie_sredstv_hraneniya_i_kompilyacii_techcatalyst_ai.docx',
  },
  {
    slug: 'lifecycle',
    title: 'Жизненный цикл и поддержка',
    description:
      'Эксплуатация, мониторинг, устранение неисправностей, обновления и требования к поддержке.',
    txtFile: 'opisanie_processov_podderzhaniya_zhiznennogo_cikla_techcatalyst_ai.txt',
    docxFile: 'opisanie_processov_podderzhaniya_zhiznennogo_cikla_techcatalyst_ai.docx',
  },
  {
    slug: 'tariffs',
    title: 'Тарифная политика',
    description:
      'Модель неисключительной лицензии, тарифицируемые позиции и принципы определения стоимости.',
    txtFile: 'tarifnaya_politika_techcatalyst_ai.txt',
    docxFile: 'tarifnaya_politika_techcatalyst_ai.docx',
  },
  {
    slug: 'site-ownership',
    title: 'Принадлежность сайта',
    description:
      'Справка о доменах и сайтах, которые используются правообладателем для размещения документации.',
    txtFile: 'spravka_o_prinadlezhnosti_saita_techcatalyst_ai.txt',
    docxFile: 'spravka_o_prinadlezhnosti_saita_techcatalyst_ai.docx',
  },
  {
    slug: 'work-report',
    title: 'Отчет о проведении работ',
    description:
      'Фиксация выполненных работ по созданию платформы, модульного состава и результата разработки.',
    txtFile: 'otchet_o_provedenii_rabot_techcatalyst_ai.txt',
    docxFile: 'otchet_o_provedenii_rabot_techcatalyst_ai.docx',
  },
]

export const publicDocFiles = new Map(
  publicDocs.flatMap((doc) => [doc.txtFile, doc.docxFile].filter(Boolean).map((file) => [file, doc] as const))
)

export const registryRequiredDocs = publicDocs.filter((doc) => doc.registryRequired)

export const navItems = [
  { id: 'map', label: 'Карта' },
  { id: 'questions', label: 'Вопросы' },
  { id: 'user-docs', label: 'Пользователям' },
  { id: 'technical-docs', label: 'Техника' },
  { id: 'runbooks', label: 'Runbooks' },
  { id: 'documents', label: 'Файлы' },
]
