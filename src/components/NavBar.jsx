import './NavBar.css'
import ThemeToggle from './ThemeToggle.jsx'
import me from '/src/assets/me.jpg'
import instagram from '/src/assets/instagram.png'
import github from '/src/assets/github.png'
import linkedin from '/src/assets/linkedin.png'

function NavBar({ visible, onHome }) {
  return (
    <header className={`navbar${visible ? ' is-visible' : ''}`}>
      <div className="navbar-inner">
        <button
          type="button"
          className="navbar-identity"
          onClick={onHome}
          aria-label="Back to top"
          tabIndex={visible ? 0 : -1}
        >
          <img className="navbar-avatar" src={me} alt="" width={30} height={30} />
          <span className="navbar-name">Ritthick Thiaga</span>
        </button>

        <div className="navbar-actions">
          <div className="navbar-socials">
            <a
              href="https://www.linkedin.com/in/ritthick-thiaga/"
              aria-label="LinkedIn"
              tabIndex={visible ? 0 : -1}
            >
              <img className="linkedIn" src={linkedin} width={19} height={19} alt="" />
            </a>
            <a
              href="https://www.instagram.com/ritthickthiaga/"
              aria-label="Instagram"
              tabIndex={visible ? 0 : -1}
            >
              <img className="instagram" src={instagram} width={19} height={19} alt="" />
            </a>
            <a
              href="https://github.com/ritthickkt"
              aria-label="GitHub"
              tabIndex={visible ? 0 : -1}
            >
              <img className="github" src={github} width={19} height={19} alt="" />
            </a>
          </div>

          <ThemeToggle hidden={!visible} />
        </div>
      </div>
    </header>
  )
}

export default NavBar
