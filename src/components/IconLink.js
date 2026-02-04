import { iconLinks } from '../data'

export default function IconLink({ parentClass, childClass }) {
  return (
    <ul className={parentClass}>
      {iconLinks.map((link, idx) => {
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              className={childClass}
              rel="noreferrer"
            >
              <i className={link.iconClass}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
