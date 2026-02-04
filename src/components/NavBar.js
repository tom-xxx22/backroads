import logo from '../images/logo.svg'
import { pageLinks } from '../data'
import { iconLinks } from '../data'
import PageLink from './PageLink'
import IconLink from './IconLink'

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <PageLink parentClass="nav-links" childClass="nav-link" />
          <IconLink parentClass="nav-icons" childClass="nav-icon" />
        </div>
      </nav>
    </div>
  )
}
