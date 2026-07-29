import { notFound } from 'next/navigation'
import { docsSections, findArticle } from '../../../../content'
import { DocsSidebar, DocsTopbar } from '../../../docs-nav'

export function generateStaticParams() {
  return docsSections.flatMap((section) =>
    section.links.map((article) => ({
      section: section.id,
      slug: article.slug,
    }))
  )
}

export default function DocsArticlePage({
  params,
}: {
  params: { section: string; slug: string }
}) {
  const article = findArticle(params.section, params.slug)

  if (!article) notFound()

  return (
    <div className="docs-page min-h-screen">
      <DocsTopbar />
      <div className="layout">
        <DocsSidebar />
        <main className="content">
          <article className="doc-article">
            <nav className="breadcrumbs" aria-label="Навигация">
              <a href="/">Документация</a>
              <span>/</span>
              <a href={`/#${article.sectionId}`}>{article.sectionTitle}</a>
            </nav>
            <p className="eyebrow">{article.sectionTitle}</p>
            <h1>{article.title}</h1>
            <p className="article-lead">{article.description}</p>

            <div className="tag-list article-tags">
              {article.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="article-body article-body-large">
              {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {article.steps?.length ? (
              <ol className="article-steps article-steps-large">
                {article.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            ) : null}

            {article.example ? <pre className="code-sample">{article.example}</pre> : null}
          </article>
        </main>
      </div>
    </div>
  )
}
