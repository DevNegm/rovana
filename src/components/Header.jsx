import React from 'react'
import classes from './Header.module.scss'
const Header = () => {
  return (
    <section className={classes.header}>
        <div className={classes.headerContent}>
            <h1>شريكك الموثوق به في جميع رحلاتك</h1>
            <p>من الحج والعمرة إلى الإجازات التي لا تُنسى، تجعل روفانا تورز كل رحلة سلسة، ميسورة التكلفة، ولا تُنسى..</p>
        </div>
    </section>
  )
}

export default Header