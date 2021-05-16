import React, { useEffect, useMemo, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const nav = useRef(null)
  const mark = useRef(null)
  const linksRefs = useRef([])

  const links = useMemo(
    () => [
      { to: '/', content: 'Главная', name: 'home', exact: true, icon: 'home' },
      {
        to: '/add',
        content: 'Добавить',
        name: 'add',
        icon: 'add_circle'
      },
      { to: '/list', content: 'Список', name: 'list', icon: 'reorder' },
      { to: '/quiz', content: 'Опрос', name: 'quiz', icon: 'smart_toy' }
    ],
    []
  )

  linksRefs.current = links.map(
    (_, index) => (linksRefs.current[index] = React.createRef())
  )

  const moveUnderline = index => {
    const el = linksRefs.current[index].current.getBoundingClientRect()
    const delta = nav.current.getBoundingClientRect().left
    const line = mark.current.style

    line.marginLeft = el.left - delta + 'px'
    line.width = el.width + 'px'
  }

  const pathname = useLocation().pathname
  useEffect(() => {
    links.forEach((link, idx) => {
      if (pathname === link.to) {
        moveUnderline(idx)
        document.title = link.content
      }
    })
  }, [pathname, links])

  return (
    <nav ref={nav}>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li className={styles.item} key={link.name}>
            <NavLink
              to={link.to}
              exact={link.exact}
              className={styles.link}
              activeClassName={styles.active}
              ref={linksRefs.current[index]}
              name={link.name}>
              <span className={['material-icons', styles.icon].join(' ')}>
                {link.icon}
              </span>
              <span className={styles.content}>{link.content}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.underline}>
        <div ref={mark} className={styles.mark}></div>
      </div>
    </nav>
  )
}
