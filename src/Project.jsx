import React, { Component } from 'react'

export default function Project({ image, title, color, body, links }) {
  return (
    <section>
      <h2 className="text" style={{
        backgroundImage: `url(${image})`,
        WebkitBackgroundClip: 'text'
      }}>
        {title}
      </h2>
      <div className="box" style={{
        backgroundImage: `url(${image})`,
        color: `${color ? color : 'black'}`
      }}>
        <div className="container">
          <div className="text-body">
            {
              body.map((para, idx) =>
                (<p key={idx}>{para}</p>)
              )
            }
          </div>
          <div className="link">
            { 
              links.map((link, idx) =>
                (<p key={idx}><a key={idx} href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i key={idx} className={`fa fa-fw ${link.icon} fa-2x`} aria-hidden='true'>
                  </i>
                  {link.name ? link.name : null}
                </a></p>)
              )
            }
          </div>
        </div >
      </div >
    </section>
  )
}

