import { Download, ExternalLink, FileText, ShieldCheck } from 'lucide-react'
import { capabilityGroups, overviewCards, publicDocs, registryRequiredDocs } from '../content'

type SectionLink = {
  id: string
  label: string
}

const sectionLinks: SectionLink[] = [
  { id: 'overview', label: 'Общие сведения' },
  { id: 'core-docs', label: 'Основная документация' },
  { id: 'capabilities', label: 'Функциональность' },
  { id: 'architecture', label: 'Архитектура' },
  { id: 'documents', label: 'Все документы' },
  { id: 'legal', label: 'Правовой статус' },
]

function DocLink({ fileName, label }: { fileName: string; label: string }) {
  return (
    <a
      href={`/api/public-docs/${encodeURIComponent(fileName)}`}
      className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
    >
      <Download className="h-4 w-4" />
      {label}
    </a>
  )
}

function SectionTitle({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description?: string
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">{title}</h2>
      {description ? <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">{description}</p> : null}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="docs-page min-h-screen text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Документация</div>
            <div className="mt-1 text-lg font-semibold text-slate-950">Техкаталист ИИ</div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a href="https://techcatalyst.ru" className="text-slate-600 hover:text-slate-950">
              techcatalyst.ru
            </a>
            <a
              href="#documents"
              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50"
            >
              Документы
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="docs-panel sticky top-24 p-4">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Содержание</div>
            <nav className="space-y-1">
              {sectionLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} className="docs-sidebar-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="space-y-10">
          <section className="docs-panel p-8">
            <div className="docs-chip">
              <ShieldCheck className="h-4 w-4" />
              Сайт правообладателя
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-slate-950">
              Документация программного обеспечения «Техкаталист ИИ»
            </h1>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
              На странице размещены сведения о программном обеспечении, описание функциональных характеристик,
              документация по установке и эксплуатации, а также сопроводительные технические и правовые материалы.
            </p>
          </section>

          <section id="overview" className="docs-panel p-8">
            <SectionTitle
              id="overview-title"
              title="Общие сведения"
              description="Краткая информация о продукте, его классе, модели предоставления и назначении."
            />

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {overviewCards.map((card) => (
                <article key={card.title} className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
                  <div className="text-sm font-semibold text-slate-950">{card.title}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{card.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <table className="docs-table w-full text-sm">
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <th className="w-56">Наименование</th>
                    <td>Техкаталист ИИ</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <th>Основной класс ПО</th>
                    <td>02.06 Серверное и связующее программное обеспечение</td>
                  </tr>
                  <tr className="bg-white">
                    <th>Дополнительный класс ПО</th>
                    <td>02.08 Средства мониторинга и управления</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <th>Модель предоставления</th>
                    <td>Неисключительная лицензия</td>
                  </tr>
                  <tr className="bg-white">
                    <th>ОКПД2</th>
                    <td>62.01.29.000 и 58.29.50.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="core-docs" className="docs-panel p-8">
            <SectionTitle
              id="core-docs-title"
              title="Основная документация"
              description="Ключевые документы по функциональности, установке и эксплуатации программного обеспечения."
            />

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {registryRequiredDocs.map((doc) => (
                <article key={doc.slug} className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
                  <div className="flex items-start gap-3">
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                    <div>
                      <h3 className="text-base font-semibold text-slate-950">{doc.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{doc.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {doc.txtFile ? <DocLink fileName={doc.txtFile} label="TXT" /> : null}
                    {doc.docxFile ? <DocLink fileName={doc.docxFile} label="DOCX" /> : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="capabilities" className="docs-panel p-8">
            <SectionTitle
              id="capabilities-title"
              title="Функциональность"
              description="Сводка по основным функциональным и эксплуатационным характеристикам программного обеспечения."
            />

            <div className="mt-6 space-y-6">
              {capabilityGroups.map((group) => (
                <section key={group.title}>
                  <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section id="architecture" className="docs-panel p-8">
            <SectionTitle
              id="architecture-title"
              title="Архитектура и развертывание"
              description="Сводные технические сведения по стеку, сборке и эксплуатационному контуру."
            />

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
                <div className="text-sm font-semibold text-slate-950">Технологический стек</div>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  <li>Next.js 14</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Prisma ORM</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
                <div className="text-sm font-semibold text-slate-950">Развертывание</div>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  <li>production-сборка выполняется командой `npm run build`</li>
                  <li>серверный запуск выполняется через `next start` или `pm2`</li>
                  <li>поддерживается развертывание на VPS, VDS и совместимой серверной инфраструктуре</li>
                  <li>доступ к данным обеспечивается через PostgreSQL и серверные API-маршруты</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="documents" className="docs-panel p-8">
            <SectionTitle
              id="documents-title"
              title="Все документы"
              description="Полный комплект опубликованных документов, доступных для просмотра и скачивания."
            />

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <table className="docs-table w-full text-sm">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th>Документ</th>
                    <th>Описание</th>
                    <th>Файлы</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {publicDocs.map((doc) => (
                    <tr key={doc.slug} className="align-top">
                      <td className="font-medium text-slate-950">{doc.title}</td>
                      <td>{doc.description}</td>
                      <td>
                        <div className="flex flex-wrap gap-2">
                          {doc.txtFile ? <DocLink fileName={doc.txtFile} label="TXT" /> : null}
                          {doc.docxFile ? <DocLink fileName={doc.docxFile} label="DOCX" /> : null}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="legal" className="docs-panel p-8">
            <SectionTitle
              id="legal-title"
              title="Правовой статус"
              description="Сведения о правообладателе, модели предоставления и размещении документации."
            />

            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
              <p>Исключительное право на программное обеспечение принадлежит ИП Борисову Ивану Анатольевичу.</p>
              <p>Программное обеспечение предоставляется по модели неисключительной лицензии.</p>
              <p>Сайт и домен используются правообладателем для размещения документации и сопроводительных материалов.</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://techcatalyst.ru"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Основной сайт
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
