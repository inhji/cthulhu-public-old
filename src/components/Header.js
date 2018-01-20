import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => (
  <header
    style={{
      background: '#111'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0, textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            color: '#fff',
            textDecoration: 'none'
          }}
        >
          <span
            style={{
              textShadow: `
              -2px -2px 0px rgba(255, 255, 255, 0.9),
              -4px -4px 0px rgba(255, 255, 255, 0.7),
              -6px -6px 0px rgba(255, 255, 255, 0.5),
              -8px -8px 0px rgba(255, 255, 255, 0.3),
              -10px -10px 0px rgba(255, 255, 255, 0.1),
              -12px -12px 0px rgba(255, 255, 255, 0.05),
              -14px -14px 0px rgba(255, 255, 255, 0.025)
            `
            }}
          >
            Technos
          </span>{' '}
          <span
            style={{
              textShadow: `
                0 -2px 0px rgba(255, 255, 255, 0.9),
                0 -4px 0px rgba(255, 255, 255, 0.7),
                0 -6px 0px rgba(255, 255, 255, 0.5),
                0 -8px 0px rgba(255, 255, 255, 0.3),
                0 -10px 0px rgba(255, 255, 255, 0.1),
                0 -12px 0px rgba(255, 255, 255, 0.05),
                0 -14px 0px rgba(255, 255, 255, 0.025)
              `
            }}
          >
            &
          </span>{' '}
          <span
            style={{
              textShadow: `
                2px -2px 0px rgba(255, 255, 255, 0.9),
                4px -4px 0px rgba(255, 255, 255, 0.7),
                6px -6px 0px rgba(255, 255, 255, 0.5),
                8px -8px 0px rgba(255, 255, 255, 0.3),
                10px -10px 0px rgba(255, 255, 255, 0.1),
                12px -12px 0px rgba(255, 255, 255, 0.05),
                14px -14px 0px rgba(255, 255, 255, 0.025)
              `
            }}
          >
            Psyche
          </span>
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
