import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHeadphones, faSmile, faFileAlt, faComment } from '@fortawesome/fontawesome-free-solid'
import { faGithub, faLastfm, faSteam, faBandcamp } from '@fortawesome/fontawesome-free-brands'

const Nav = () => (
  <nav>
    <div className="box">
      <li>
        <a href="https://github.com/inhji">
          <FontAwesomeIcon icon={faGithub} /> github
        </a>
      </li>
      <li>
        <a href="https://listenbrainz.org/user/inhji">
          <FontAwesomeIcon icon={faHeadphones} /> listenbrainz
        </a>
      </li>
      <li>
        <a href="https://indieweb.org/User:Inhji.de">
          <FontAwesomeIcon icon={faSmile} /> indieweb
        </a>
      </li>
      <li>
        <a href="https://steamcommunity.com/id/s4itama">
          <FontAwesomeIcon icon={faSteam} /> steam
        </a>
      </li>
      <li>
        <a href="https://bandcamp.com/inhji/">
          <FontAwesomeIcon icon={faBandcamp} /> bandcamp
        </a>
      </li>
    </div>

    <div className="box">
      <li>
        <Link to="/geschichten">
          <FontAwesomeIcon icon={faFileAlt} /> Geschichten
        </Link>
      </li>
      <li>
        <Link to="/gedanken">
          <FontAwesomeIcon icon={faComment} /> Gedanken
        </Link>
      </li>
    </div>
  </nav>
)

export default Nav
