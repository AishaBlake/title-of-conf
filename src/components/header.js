import { Link } from "gatsby"
import React from "react"
import Logotype from "./logotype"

const Header = ({menuLinks}) => (
  <header
    style={{
      alignItems: `center`,
      backgroundColor: `#fff`,
      display: `flex`,
      justifyContent: `space-between`,
      margin: `0 auto`,
      maxWidth: 960,
      maxHeight: `100px`,
      padding: `1rem 1.5rem`
    }}
  >
    <div style={{
      margin: `0`
    }}>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Logotype style={{ maxWidth: `300px` }} />
      </Link>
    </div>
    <nav>
      <ul style={{ display: "flex", flex: 1 }}>
        {menuLinks.map(link => (
          <li
            key={link.name}
            style={{
              listStyleType: `none`,
              padding: `1rem`,
            }}
          >
            <Link to={link.link}
            style={{
              color: `#362049`,
              fontSize: `.8rem`,
              textDecoration: `none`,
            }}
            activeStyle={{
              fontWeight: `bold`
            }}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default Header
