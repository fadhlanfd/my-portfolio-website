import './menu.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Menu({menuOpen, setMenuOpen}) {

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        {/* <li onClick={()=>setMenuOpen(false)}>
          <a href="#about">About</a>
        </li> */}
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Certificate</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#skill">Skills</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="center">
        <div className="itemContainer">
          <ul onClick={()=>setMenuOpen(false)}>
            <a href="https://github.com/fadhlanfd"
          class="btn"><GitHubIcon className="icon"/></a>
          </ul>
          <ul onClick={()=>setMenuOpen(false)}>
            <a href="https://www.facebook.com/fadhlanfd/"
          class="btn"><InstagramIcon className="icon"/></a>
          </ul>
          <ul onClick={()=>setMenuOpen(false)}>
            <a href="https://twitter.com/fadhlanfd"
          class="btn"><TwitterIcon className="icon"/></a>
          </ul>
        </div>
      </div>
    </div>
  )
}
