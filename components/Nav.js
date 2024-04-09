import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'


const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='https://soundcloud.com/dobry-duch-bartosz'>Soundcloud</Link>
        </li>
        <li>
          <Link href='https://www.instagram.com/lyrical_assassin_001'>Instagram</Link>
        </li>
        <li>
          <Link href='https://dobryduchbartosz.bandcamp.com'>Bandcamp</Link>
        </li>
        <li>
          <Link href='https://open.spotify.com/artist/5Fjxo7C5gAahca6cOtUc55?si=WMJhCEApTRaC10SpccOzfQ&dl_branch=1'>Spotify</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
