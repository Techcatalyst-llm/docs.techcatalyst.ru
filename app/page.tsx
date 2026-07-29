import { Download, ExternalLink, FileText, Search, ShieldCheck } from 'lucide-react'
import {
  docTracks,
  navItems,
  publicDocs,
  questionCards,
  registryRequiredDocs,
  runbooks,
  scenarios,
  securityControls,
  systemAreas,
} from '../content'

function DocLink({ fileName, label }: { fileName: string; label: string }) {
  return (
    <a href={`/api/public-docs/${encodeURIComponent(fileName)}`} className="doc-button">
      <Download className="h-4 w-4" />
      {label}
    </a>
  )
}

function SectionTitle({
  eyebrow,
  id,
  title,
  description,
}: {
  eyebrow?: string
  id: string
  title: string
  description: string
}) {
  return (
    <div id={id} className="scroll-mt-24">
      {eyebrow ? <div className="section-eyebrow">{eyebrow}</div> : null}
      <h2 className="section-title">{title}</h2>
      <p className="section-text">{description}</p>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="docs-page min-h-screen text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-5 px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="brand-mark">T</span>
            <span>
              <span className="block text-sm font-semibold text-slate-950">Takt Docs</span>
              <span className="block text-xs text-slate-500">Документация платформы</span>
            </span>
          </a>
          <div className="hidden min-w-[360px] items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex">
            <Search className="h-4 w-4" />
            Что где находится, как работает, как проверить
          </div>
          <div className="flex items-center gap-2">
            <a className="top-link" href="https://techcatalyst.ru">
              Techcatalyst
            </a>
            <a className="top-link top-link-strong" href="#questions">
              Найти ответ
            </a>
          </div>
        </div>
      </header>

      <div id="top" className="mx-auto grid max-w-[1480px] gap-6 px-5 py-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="side-nav">
            <div className="side-title">Разделы</div>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <a key={item.id} className="side-link" href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="side-note">
              Документация ведётся на русском языке. Статус и инструкции должны обновляться вместе с продуктом.
            </div>
          </div>
        </aside>

        <main className="space-y-6">
          <section className="intro-panel">
            <div className="intro-copy">
              <div className="status-line">
                <ShieldCheck className="h-4 w-4" />
                Документация для внедрения, эксплуатации и ежедневной работы
              </div>
              <h1>Единый центр документации Takt и Techcatalyst Guard</h1>
              <p>
                Этот портал отвечает на практические вопросы: что делает платформа, где находится нужная функция,
                как она работает внутри системы и чем проверить, что всё исправно.
              </p>
            </div>
            <div className="intro-metrics" aria-label="Состояние документации">
              <div>
                <span>2</span>
                <strong>типа документации</strong>
                <p>пользовательская и техническая</p>
              </div>
              <div>
                <span>8</span>
                <strong>системных зон</strong>
                <p>UI, API, агент, БД, OIDC, Loki, MITRE/OWASP</p>
              </div>
              <div>
                <span>24/7</span>
                <strong>эксплуатационные ответы</strong>
                <p>проверки, runbooks и troubleshooting</p>
              </div>
            </div>
          </section>

          <section className="docs-panel p-6">
            <SectionTitle
              eyebrow="Карта портала"
              id="map"
              title="Два входа в одну документацию"
              description="Пользовательская часть объясняет действия в интерфейсе. Техническая часть фиксирует устройство платформы, эксплуатацию, интеграции и проверяемые контракты."
            />
            <div className="mt-5 grid gap-4 xl:grid-cols-2">
              {docTracks.map((track) => (
                <article className="track-card" key={track.title}>
                  <div className="track-head">
                    <h3>{track.title}</h3>
                    <span>{track.audience}</span>
                  </div>
                  <p>{track.description}</p>
                  <div className="tag-list">
                    {track.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="docs-panel p-6">
            <SectionTitle
              eyebrow="Быстрые ответы"
              id="questions"
              title="Что, где и как работает"
              description="Формат каждой карточки одинаковый: короткий ответ, где смотреть в продукте и как проверить результат инженерно."
            />
            <div className="mt-5 grid gap-3 xl:grid-cols-2">
              {questionCards.map((item) => (
                <article className="qa-card" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                  <dl>
                    <div>
                      <dt>Где смотреть</dt>
                      <dd>{item.where}</dd>
                    </div>
                    <div>
                      <dt>Как проверить</dt>
                      <dd>{item.check}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section className="docs-panel p-6">
            <SectionTitle
              eyebrow="Пользовательская часть"
              id="user-docs"
              title="Сценарии по ролям"
              description="Пользовательская документация должна объяснять не компоненты, а рабочие задачи конкретной роли."
            />
            <div className="mt-5 grid gap-3 xl:grid-cols-3">
              {scenarios.map((scenario) => (
                <article className="scenario-card" key={scenario.role}>
                  <div className="scenario-role">{scenario.role}</div>
                  <h3>{scenario.goal}</h3>
                  <ol>
                    {scenario.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </section>

          <section className="docs-panel p-6">
            <SectionTitle
              eyebrow="Техническая часть"
              id="technical-docs"
              title="Где находится каждый контур"
              description="Техническая документация должна давать карту компонентов, ответственность каждого контура и минимальную проверку исправности."
            />
            <div className="mt-5 overflow-hidden rounded-md border border-slate-200">
              <div className="system-row system-head">
                <div>Контур</div>
                <div>Как работает</div>
                <div>Где находится</div>
                <div>Как проверить</div>
              </div>
              {systemAreas.map((item) => (
                <div className="system-row" key={item.area}>
                  <div className="system-area">
                    <span>{item.icon}</span>
                    <strong>{item.area}</strong>
                  </div>
                  <div>{item.purpose}</div>
                  <div>{item.location}</div>
                  <div>{item.verification}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="docs-panel p-6">
            <SectionTitle
              eyebrow="Runbooks"
              id="runbooks"
              title="Проверяемые инструкции эксплуатации"
              description="Runbook считается хорошим только если инженер может выполнить его как последовательность действий и получить проверяемый результат."
            />
            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              {runbooks.map((runbook) => (
                <article className="runbook-card" key={runbook.title}>
                  <div className="runbook-owner">{runbook.owner}</div>
                  <h3>{runbook.title}</h3>
                  <ul>
                    {runbook.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="docs-panel p-6">
            <SectionTitle
              eyebrow="Безопасность документации"
              id="security"
              title="Что нельзя терять при обновлениях"
              description="Документация является частью enterprise-поставки: она должна быть точной, безопасной и воспроизводимой."
            />
            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              {securityControls.map((control) => (
                <article className="control-card" key={control.title}>
                  <h3>{control.title}</h3>
                  <p>{control.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="docs-panel p-6">
            <SectionTitle
              eyebrow="Сопроводительные файлы"
              id="documents"
              title="Формальные документы"
              description="Сохраняем доступ к существующим регистрационным и правовым документам, но основной вход теперь через сценарии и техническую карту."
            />

            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              {registryRequiredDocs.map((doc) => (
                <article className="file-card" key={doc.slug}>
                  <FileText className="h-5 w-5 text-slate-500" />
                  <h3>{doc.title}</h3>
                  <p>{doc.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {doc.txtFile ? <DocLink fileName={doc.txtFile} label="TXT" /> : null}
                    {doc.docxFile ? <DocLink fileName={doc.docxFile} label="DOCX" /> : null}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-md border border-slate-200">
              <div className="docs-table-row docs-table-head">
                <div>Документ</div>
                <div>Описание</div>
                <div>Файлы</div>
              </div>
              {publicDocs.map((doc) => (
                <div className="docs-table-row" key={doc.slug}>
                  <div className="font-medium text-slate-950">{doc.title}</div>
                  <div>{doc.description}</div>
                  <div className="flex flex-wrap gap-2">
                    {doc.txtFile ? <DocLink fileName={doc.txtFile} label="TXT" /> : null}
                    {doc.docxFile ? <DocLink fileName={doc.docxFile} label="DOCX" /> : null}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="docs-footer">
            <span>Документация обновляется вместе с продуктом.</span>
            <a href="https://techcatalyst.ru">
              Основной сайт <ExternalLink className="h-4 w-4" />
            </a>
          </footer>
        </main>
      </div>
    </div>
  )
}
