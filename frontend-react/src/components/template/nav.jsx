import React from 'react'
import './nav.css'

import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Home
            </Link>
            <Link to="/tarefas">
                <i className="fa fa-list-alt"></i> Tarefas
            </Link>
        </nav>
    </aside>