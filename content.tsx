import type { ReactNode } from 'react'
import { Blocks, Layers3, ShieldCheck, Wallet } from 'lucide-react'

export type PublicDoc = {
  slug: string
  title: string
  description: string
  txtFile?: string
  docxFile?: string
  registryRequired?: boolean
}

export type OverviewCard = {
  icon: ReactNode
  title: string
  text: string
}

export type CapabilityGroup = {
  title: string
  items: string[]
}

export const overviewCards: OverviewCard[] = [
  {
    icon: <Blocks className="h-5 w-5" />,
    title: 'Продукт',
    text: 'Программное обеспечение «TechCatalyst Guard» — endpoint AI-DLP агент для защиты рабочей станции AI-разработчика. Перехватывает команды AI-агентов до их выполнения, маскирует чувствительные данные в выводе и обеспечивает централизованный аудит.',
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: 'Класс',
    text: 'Основной класс ПО: 02.12 Средства обеспечения информационной безопасности. Дополнительно: 02.08 Средства мониторинга и управления.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Правовой статус',
    text: 'Исключительное право принадлежит ИП Борисову Ивану Анатольевичу. ПО предоставляется по модели неисключительной лицензии.',
  },
  {
    icon: <Wallet className="h-5 w-5" />,
    title: 'Тарифы',
    text: 'Стоимость формируется в соответствии с тарифной политикой правообладателя и условиями договора с пользователем.',
  },
]

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'Shell interception и блокировка команд',
    items: [
      'перехват команд AI-агентов (Claude Code, Codex, Qwen Code, Cursor, Gemini CLI) через shell hooks',
      'оценка команды по подписанной политике до её выполнения (block / allow / mask_output)',
      'kernel-level enforcement на macOS (Endpoint Security Framework) и Linux (fanotify)',
      'маскирование чувствительных данных в stdout команд в реальном времени (streaming)',
      'классификация команд по уровню риска (git push — block, git commit — warn)',
    ],
  },
  {
    title: 'Детекция чувствительных данных',
    items: [
      'сканирование файлов проекта: секреты (AWS keys, DB passwords, JWT tokens, high-entropy strings)',
      'детекция персональных данных: ФИО, СНИЛС, паспорт, ИНН, email, телефон (русский и английский)',
      'энтропийный анализ для обнаружения высокоэнтропийных строк',
      'clipboard monitoring: маскирование секретов и PII при копировании в буфер обмена',
      'репозиторийный сканер: анализ рабочей директории при запуске AI-агента',
    ],
  },
  {
    title: 'MCP proxy и защита ресурсов',
    items: [
      'stdio JSON-RPC прокси между AI-агентом и MCP-сервером',
      'блокировка запросов к защищённым ресурсам (.env, .ssh, ключевой материал)',
      'маскирование чувствительных данных в ответах MCP-серверов',
      'конфигурируемый через политику набор защищённых путей',
    ],
  },
  {
    title: 'Control plane и аудит',
    items: [
      'централизованная контрольная панель (Go + PostgreSQL)',
      'real-time события: все решения агента доставляются в control plane',
      'полный audit trail: кто, когда, какое правило, какой детектор',
      'zero-knowledge экспорт: raw content заменяется SHA-256 хешами при синхронизации',
      'RBAC: роли Administrator, Security Officer, Viewer',
    ],
  },
  {
    title: 'Управление политиками',
    items: [
      'политики подписаны Ed25519 — tamper detection на уровне ядра',
      'версионирование политик с rollback capability',
      'fail-closed: отсутствие trust material блокирует работу агента',
      'правила: command_contains, regex, surface (shell/mcp/clipboard), scope (directory/user/group/workstation)',
      'severity levels: critical, high, medium, low',
    ],
  },
  {
    title: 'Интеграция и экспорт',
    items: [
      'Grafana Loki push: built-in HTTP exporter с durable Postgres-backed queue и exponential backoff',
      'Keycloak OIDC: интеграция с корпоративным SSO из коробки',
      'три типа экспортируемых данных: security events, audit log, detector metrics',
      'API: dry-run, статус очереди, принудительный flush',
      'ручной экспорт в JSON через admin UI',
    ],
  },
  {
    title: 'Техническая архитектура',
    items: [
      'station-agent: compiled Go binary (macOS amd64/arm64, Linux amd64/arm64)',
      'control plane: Go HTTP server + PostgreSQL + Keycloak OIDC + Loki',
      'admin UI: server-rendered HTML (vanilla JS, Tailwind CSS)',
      'kernel enforcement: Endpoint Security Framework (macOS), fanotify (Linux)',
      'shell hooks: preexec (zsh), DEBUG trap (bash), PowerShell, cmd.exe',
    ],
  },
]

export const publicDocs: PublicDoc[] = [
  {
    slug: 'functional-spec',
    title: 'Описание функциональных характеристик ПО «TechCatalyst Guard»',
    description:
      'Описание назначения, пользовательских и административных функций, архитектурных модулей и сценариев применения программного обеспечения.',
    txtFile: 'guard_functional_spec.txt',
    registryRequired: true,
  },
  {
    slug: 'installation-guide',
    title: 'Документация по установке ПО «TechCatalyst Guard»',
    description:
      'Инструкция по развертыванию control plane (Docker Compose), установке station-agent на рабочую станцию, настройке enrollment и первой публикации политики.',
    txtFile: 'guard_installation_guide.txt',
    registryRequired: true,
  },
  {
    slug: 'operations-guide',
    title: 'Документация по эксплуатации ПО «TechCatalyst Guard»',
    description:
      'Управление политиками, мониторинг событий, настройка Loki-экспорта, Keycloak-интеграция, troubleshooting и типовые сценарии эксплуатации.',
    txtFile: 'guard_operations_guide.txt',
    registryRequired: true,
  },
  {
    slug: 'product-overview',
    title: 'Продукт и правовой статус',
    description:
      'Общее описание программного продукта, классификация, модель предоставления и сведения об исключительном праве.',
    txtFile: 'guard_product_overview.txt',
    docxFile: 'guard_product_overview.docx',
  },
  {
    slug: 'architecture',
    title: 'Техническая архитектура',
    description:
      'Описание station-agent (Go binary), control plane (Go + PostgreSQL), kernel enforcement (ESF / fanotify), shell hooks, MCP proxy и admin UI.',
    txtFile: 'guard_architecture.txt',
    docxFile: 'guard_architecture.docx',
  },
  {
    slug: 'security-model',
    title: 'Модель безопасности',
    description:
      'Описание модели угроз, fail-closed design, Ed25519 подпись политик, zero-knowledge экспорт, kernel-level enforcement и защиты от tampering.',
    txtFile: 'guard_security_model.txt',
    docxFile: 'guard_security_model.docx',
  },
  {
    slug: 'lifecycle',
    title: 'Жизненный цикл и поддержка',
    description:
      'Процессы обновления политик, ротации ключей подписи, обновления station-agent, поддержки и устранения неисправностей.',
    txtFile: 'guard_lifecycle.txt',
    docxFile: 'guard_lifecycle.docx',
  },
  {
    slug: 'sbom',
    title: 'SBOM и supply chain',
    description:
      'CycloneDX SBOM для station-agent (Go binary), govulncheck в CI pipeline, блокировка релиза при уязвимостях зависимостей.',
    txtFile: 'guard_sbom.txt',
    docxFile: 'guard_sbom.docx',
  },
  {
    slug: 'tariffs',
    title: 'Тарифная политика',
    description:
      'Модель неисключительной лицензии, тарифицируемые позиции и принципы определения стоимости по договору.',
    txtFile: 'guard_tariffs.txt',
    docxFile: 'guard_tariffs.docx',
  },
  {
    slug: 'site-ownership',
    title: 'Принадлежность сайта',
    description:
      'Справка о том, что сайты и домены используются правообладателем для размещения и документирования ПО.',
    txtFile: 'guard_site_ownership.txt',
    docxFile: 'guard_site_ownership.docx',
  },
]

export const publicDocFiles = new Map(
  publicDocs.flatMap((doc) => [doc.txtFile, doc.docxFile].filter(Boolean).map((file) => [file, doc] as const))
)

export const registryRequiredDocs = publicDocs.filter((doc) => doc.registryRequired)
