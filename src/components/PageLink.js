import { pageLinks } from '../data'

export default function PageLink({ parentClass, childClass }) {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((item, idx) => {
        return (
          <li key={item.id}>
            <a href={item.href} className={childClass}>
              {item.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
