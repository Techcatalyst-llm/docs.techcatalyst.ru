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
    text: 'Программное обеспечение «Техкаталист ИИ» для централизованного управления корпоративным доступом к AI-функциональности, маршрутизации запросов, учета потребления и мониторинга.',
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: 'Класс',
    text: 'Основной класс ПО: 02.06 Серверное и связующее программное обеспечение. Дополнительно: 02.08 Средства мониторинга и управления.',
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
    title: 'Основные функции',
    items: [
      'авторизация пользователей и разграничение прав доступа по ролям',
      'управление организациями, пользователями, подрядчиками и API-ключами',
      'маршрутизация запросов к OpenAI, Anthropic, Gemini, Grok, DeepSeek и другим совместимым провайдерам',
      'учет запросов, токенов, стоимости, лимитов и баланса',
      'мониторинг инфраструктуры, статусов ключей, уведомления и отчетность',
    ],
  },
  {
    title: 'Техническая архитектура',
    items: [
      'Next.js 14, TypeScript, React и Node.js',
      'Prisma ORM и PostgreSQL для модели данных и хранения',
      'серверные API routes для бизнес-логики и интеграций',
      'production-build через npm run build с результатами в директории .next',
      'развертывание на VPS/VDS или иной совместимой серверной инфраструктуре',
    ],
  },
  {
    title: 'Проверка и эксплуатация',
    items: [
      'установка по инструкции с PostgreSQL, Prisma и environment-переменными',
      'тестовые учетные записи и тестовые ключи вместо production-данных',
      'отдельные документы по функциональности, установке и эксплуатации программного обеспечения',
      'описание жизненного цикла, поддержки, устранения неисправностей и обновлений',
      'отдельные справки по сайту, тарифной политике и основаниям возникновения прав',
    ],
  },
]

export const publicDocs: PublicDoc[] = [
  {
    slug: 'functional-spec',
    title: 'Описание функциональных характеристик программного обеспечения «Техкаталист ИИ»',
    description:
      'Основное описание назначения, пользовательских и административных функций, архитектурных модулей и сценариев применения программного обеспечения.',
    txtFile: 'opisanie_funkcionalnyh_harakteristik_po_tehkatalist_ii.txt',
    registryRequired: true,
  },
  {
    slug: 'installation-guide',
    title: 'Документация по установке программного обеспечения «Техкаталист ИИ»',
    description:
      'Информация, необходимая для развертывания, настройки окружения, подготовки зависимостей, базы данных и первого запуска программного обеспечения.',
    txtFile: 'dokumentaciya_po_ustanovke_po_tehkatalist_ii.txt',
    registryRequired: true,
  },
  {
    slug: 'operations-guide',
    title: 'Документация по эксплуатации программного обеспечения «Техкаталист ИИ»',
    description:
      'Информация, необходимая для эксплуатации, работы с ролями, типовыми сценариями, ограничениями, сопровождением и использованием тестового контура.',
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
      'Описание frontend, backend, базы данных, API, модуля маршрутизации, мониторинга и биллинга.',
    txtFile: 'opisanie_tehnicheskoy_arhitektury_techcatalyst_ai.txt',
    docxFile: 'opisanie_tehnicheskoy_arhitektury_techcatalyst_ai.docx',
  },
  {
    slug: 'storage-and-build',
    title: 'Хранение и компиляция',
    description:
      'Где хранятся исходники и сборочные артефакты, как выполняется компиляция и production-build.',
    txtFile: 'opisanie_sredstv_hraneniya_i_kompilyacii_techcatalyst_ai.txt',
    docxFile: 'opisanie_sredstv_hraneniya_i_kompilyacii_techcatalyst_ai.docx',
  },
  {
    slug: 'lifecycle',
    title: 'Жизненный цикл и поддержка',
    description:
      'Процессы эксплуатации, мониторинга, устранения неисправностей, обновлений и требования к персоналу поддержки.',
    txtFile: 'opisanie_processov_podderzhaniya_zhiznennogo_cikla_techcatalyst_ai.txt',
    docxFile: 'opisanie_processov_podderzhaniya_zhiznennogo_cikla_techcatalyst_ai.docx',
  },
  {
    slug: 'tariffs',
    title: 'Тарифная политика',
    description:
      'Модель неисключительной лицензии, тарифицируемые позиции и принципы определения стоимости по договору.',
    txtFile: 'tarifnaya_politika_techcatalyst_ai.txt',
    docxFile: 'tarifnaya_politika_techcatalyst_ai.docx',
  },
  {
    slug: 'site-ownership',
    title: 'Принадлежность сайта',
    description:
      'Справка о том, что сайты и домены используются правообладателем для размещения и документирования ПО.',
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
