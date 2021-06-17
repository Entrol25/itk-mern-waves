import React from 'react';
import cl from './Footer.module.css'

const Footer = () => {

  let sotial = [
    { id: 0, name: 'Twitter' },
    { id: 1, name: 'YouTube' },
    { id: 2, name: 'VK' },
    { id: 3, name: 'FaceBoock' },
    { id: 4, name: 'Linkedin' }
  ]

  let newSotial = sotial.map((count) => {
    return (count.name + ' ')// < br /> + 
  })

  return (
    <footer className={cl.footer}>

      <h1>Footer</h1>

      {/* {sotial[0].name} {sotial[0].id} */}

      {newSotial}

    </footer>
  );
}

export default Footer;