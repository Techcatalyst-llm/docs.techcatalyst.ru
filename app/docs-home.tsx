'use client'

import { useMemo, useState } from 'react'
import { Download, ExternalLink, FileText, Search } from 'lucide-react'
import { allArticles, docsSections, faqItems, getArticlePath, popularGuides, publicDocs, registryRequiredDocs } from '../content'
import { DocsSidebar, DocsTopbar } from './docs-nav'

function DocLink({ fileName, label }: { fileName: string; label: string }) {
  return (
    <a href={`/api/public-docs/${encodeURIComponent(fileName)}`} className="doc-button">
      <Download className="h-4 w-4" />
      {label}
    </a>
  )
}

export default function DocsHome() {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const searchResults = useMemo(() => {
    if (!normalizedQuery) return []
    return allArticles.filter((item) =>
      [item.title, item.description, item.sectionTitle, ...item.tags].join(' ').toLowerCase().includes(normalizedQuery)
    )
  }, [normalizedQuery])

  return (
    <div className="docs-page min-h-screen">
      <DocsTopbar />

      <div id="top" className="layout">
        <DocsSidebar />

        <main className="content">
          <section className="hero" id="overview">
            <p className="eyebrow">Документация платформы</p>
            <h1>Документация Takt</h1>
            <p>
              Руководства для пользователей, администраторов, инженеров эксплуатации и разработчиков. Выберите раздел
              в меню или найдите нужную инструкцию по продукту.
            </p>
            <div className="searchbox">
              <Search className="h-5 w-5" />
              <input
                aria-label="Поиск по документации"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Найти: политика, агент, Keycloak, Loki, события, резервная копия"
                value={query}
              />
            </div>
            {normalizedQuery ? (
              <div className="search-results">
                <div className="search-results-title">Найдено</div>
                {searchResults.length ? (
                  searchResults.map((item) => (
                    <a key={`${item.sectionId}-${item.slug}`} href={item.path} className="search-result">
                      <span>{item.sectionTitle}</span>
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </a>
                  ))
                ) : (
                  <div className="empty-result">Ничего не найдено. Попробуйте другой запрос.</div>
                )}
              </div>
            ) : null}
          </section>

          <section id="guides" className="section">
            <div className="section-head">
              <p>Начните здесь</p>
              <h2>Популярные руководства</h2>
            </div>
            <div className="guide-grid">
              {popularGuides.map((guide) => (
                <article className="guide-card" key={guide.slug}>
                  <div className="guide-meta">
                    <span>{guide.section}</span>
                    <span>{guide.role}</span>
                    <span>{guide.time}</span>
                  </div>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <ol>
                    {guide.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </section>

          <section id="sections" className="section">
            <div className="section-head">
              <p>Все материалы</p>
              <h2>Разделы документации</h2>
            </div>
            <div className="section-list">
              {docsSections.map((section) => (
                <section className="docs-section" id={section.id} key={section.id}>
                  <div className="docs-section-head">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                  <div className="article-list">
                    {section.links.map((link) => (
                      <a className="article-card article-link-card" href={getArticlePath(section.id, link.slug)} key={link.title}>
                        <div className="article-main">
                          <h4>{link.title}</h4>
                          <p>{link.description}</p>
                        </div>
                        <div className="tag-list">
                          {link.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section id="faq" className="section">
            <div className="section-head">
              <p>Коротко</p>
              <h2>Частые вопросы</h2>
            </div>
            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="files" className="section">
            <div className="section-head">
              <p>Скачать</p>
              <h2>Документы для скачивания</h2>
            </div>
            <div className="formal-grid">
              {registryRequiredDocs.map((doc) => (
                <article className="formal-card" key={doc.slug}>
                  <FileText className="h-5 w-5 text-slate-500" />
                  <h3>{doc.title}</h3>
                  <p>{doc.description}</p>
                  <div>
                    {doc.txtFile ? <DocLink fileName={doc.txtFile} label="TXT" /> : null}
                    {doc.docxFile ? <DocLink fileName={doc.docxFile} label="DOCX" /> : null}
                  </div>
                </article>
              ))}
            </div>
            <div className="file-table">
              <div className="file-row file-row-head">
                <div>Документ</div>
                <div>Описание</div>
                <div>Файлы</div>
              </div>
              {publicDocs.map((doc) => (
                <div className="file-row" key={doc.slug}>
                  <div>{doc.title}</div>
                  <div>{doc.description}</div>
                  <div className="file-actions">
                    {doc.txtFile ? <DocLink fileName={doc.txtFile} label="TXT" /> : null}
                    {doc.docxFile ? <DocLink fileName={doc.docxFile} label="DOCX" /> : null}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="footer">
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
