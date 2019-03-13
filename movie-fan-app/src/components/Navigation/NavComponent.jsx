import React from 'react'
import { Link } from "react-router-dom";
import {NavItem} from 'reactstrap'

export default function NavComponent({navItem: {navTitle, path}}) {
  return (
    <div>
       <NavItem>
          <Link to={`${path}`}><section>
        <h3 className="varient-3">{navTitle}</h3>
        <div>
          <span className="hover hover-3">{navTitle}</span>
        </div>
      </section></Link>
        </NavItem>
    </div>
  )
}
