import { docsSections, getArticlePath, topNav } from '../content'

export function DocsTopbar() {
  return (
    <header className="topbar">
      <a className="brand" href="/">
        <span className="brand-mark">T</span>
        <span>
          <strong>Документация Takt</strong>
          <small>Пользовательские и технические руководства</small>
        </span>
      </a>
      <nav className="topnav">
        {topNav.map((item) => (
          <a href={`/${item.href}`} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export function DocsSidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-group">
        <div className="sidebar-title">Начало</div>
        <a href="/#overview">Обзор</a>
        <a href="/#guides">Популярные руководства</a>
        <a href="/#files">Документы для скачивания</a>
      </div>
      {docsSections.map((group) => (
        <div className="sidebar-group" key={group.title}>
          <div className="sidebar-title">{group.title}</div>
          {group.links.map((link) => (
            <a href={getArticlePath(group.id, link.slug)} key={`${group.id}-${link.slug}`}>
              {link.title}
            </a>
          ))}
        </div>
      ))}
    </aside>
  )
}
