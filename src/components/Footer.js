import { pageLinks } from '../data'
import { iconLinks } from '../data'
import PageLink from './PageLink'
import IconLink from './IconLink'

export default function Footer() {
  return (
    <footer className="section footer">
      <PageLink parentClass="footer-links" childClass="footer-link" />
      <IconLink parentClass="footer-icons" childClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
