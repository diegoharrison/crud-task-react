import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/home'
import UserCrud from '../components/tarefa/tarefa-crud'

/* Mapeamento o roteamento dos components*/
export default props =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tarefas" component={UserCrud} />
        <Redirect from="*" to="/" />
    </Switch>


