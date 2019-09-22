import React from 'react'
import Main from '../template/main'

import axios from 'axios'


const headerProps = {
    icon: 'list-alt',
    title: ' Tarefas',
    subtitle: 'Cadastro de tarefas'
}

const baseUrl = 'http://localhost:3001/tarefa'
const initState= {
    tarefa: { nome:'', descricao:'', prazo:'', prioridade:'', concluida:''},
    list: []
}

export default class UserCrud extends React.Component{

    

    state = { ...initState }

    /**Chamada de quando o elemento for exibido na tela */
    componentWillMount() {
        axios.get(baseUrl,{           
            crossdomain: true
        })
        .then(resp => {
            this.setState({ list: resp.data }) /**salvando dentro da lista de requisições */
        })        
    }


    /*Form clear (Limpando o formulário) */
    clear() {
        this.setState({ tarefa: initState.tarefa })
    }
    
    save() {           
        
        const tarefa = this.state.tarefa        
        const method = tarefa.id ? 'put' : 'post'
        const url = tarefa.id ? `${baseUrl}/${tarefa.id}` : baseUrl
        var config = {
            headers: {crossdomain: true}
        };
        axios[method](url,tarefa,config)
        .then(resp => {            
            const list = this.getUpdatedList(resp.data)
            this.setState({ tarefa: initState.tarefa, list })
            alert("Tarefa salva com sucesso!");                          
        })
        .catch(error => {
            if(error === true){
                alert("Erro ao salvar a tarefa!");                          
            }
        })
    }

    getUpdatedList(tarefa){       
        const list = this.state.list.filter(u => u.id !== tarefa.id) /**removendo o usuario da lista */
        list.unshift(tarefa) /**inserindo no array (1ª posição)*/
        return list
    }

    
    updatefield(event) {
        const tarefa = { ...this.state.tarefa }
        tarefa[event.target.name] = event.target.value /**pegamos o conteúdo de input com target*/
        this.setState({ tarefa })
    }

    handleChange = e => {        
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.updatefield();        
    }


    renderForm(){
        /** Responsável por renderizar o formulário */
        return (                

            <div className="form">                
                <div className="row col-12">
                    <div className="col-6 col-md-6">
                        <div className="form-group">
                            <label htmlFor="nome">Nome / Tarefa</label>
                            <input type="text" className="form-control" 
                                name="nome"
                                value={this.state.tarefa.nome}
                                onChange={e => this.updatefield(e)}
                                placeholder="Digite o nome..."
                                require
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descricao</label>
                            <input type="descricao" className="form-control" 
                                name="descricao" 
                                value={this.state.tarefa.descricao}
                                onChange={e => this.updatefield(e)}
                                placeholder="Digite a descricao da tarefa..."
                                require
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prazo">Prazo / Data</label>
                            <input type="date" className="form-control" 
                                name="prazo" 
                                value={this.state.tarefa.prazo}
                                onChange={e => this.updatefield(e)}
                                placeholder="Defina um prazo..."
                                require
                                />
                        </div>
                    </div>

                    <div className="col-6 col-md-6">

                        <div className="form-group">
                                <label htmlFor="prioridade">Prioridade</label>
                                <select type="text" name="prioridade" className="form-control"                                
                                    value={this.state.tarefa.prioridade}
                                    onChange={e => this.updatefield(e)} require>                                
                                    <option hidden>Escolha uma opção</option>
                                    <option value="Muito Alta">Muito Alta</option>                            
                                    <option value="Alta">Alta</option>                            
                                    <option value="Média">Média</option>                            
                                    <option value="Baixa">Baixa</option>                            
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="concluida">Concluída</label>
                                <select type="text" name="concluida" className="form-control"                                
                                    value={this.state.tarefa.concluida}
                                    onChange={e => this.updatefield(e)} require>
                                    <option hidden>Escolha uma opção</option>                            
                                    <option value="Sim">Sim</option>                            
                                    <option value="Não">Não</option>                            
                                </select>
                            </div>
                        </div>
                    </div>

                
                    <div className="col-12 d-flex justify-content end">
                        <button className="btn btn-primary"
                        onClick={e => this.save(e)}>Salvar</button>
                        <button className="btn btn-secondary ml-2"
                        onClick={e => this.clear(e)}>Cancelar</button>
                    </div>
            </div>
            
        );
    }


    /**edição da tarefa */
    load(tarefa){
        this.setState({ tarefa }) /** atualiza o estado da app. */        
    }
    
    
    /**removendo a tarefa */    
    remove(tarefa){
        axios.delete(`${baseUrl}/${tarefa.id}`)
        .then(resp => {
            const list = this.state.list.filter(u => u !== tarefa)
            this.setState({ list })  
            alert("Tarefa excluída com sucesso!")          
        })
    }

    
    /**listando a tarefa */
    rendertable(){
        return(
            <table className="table mt-4">
               <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descricão</th>
                        <th>Prazo</th>
                        <th>Prioridade</th>
                        <th>Concluída</th>
                        <th>Editar | Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderows()}
                </tbody>            
            </table>
        );
    }
    renderows(){
        
        /**mapeando as tarefas que estão no estado do objeto e depois mostrar na tabela*/
        return this.state.list.map((tarefa,index) => {
            return (                
                <tr key={index}>
                    <td>{tarefa.nome}</td>
                    <td>{tarefa.descricao}</td>
                    <td>{tarefa.prazo}</td>
                    <td>{tarefa.prioridade}</td>
                    <td>{tarefa.concluida}</td>
                    <td>
                        <button className="btn btn-warning mr-2"
                        onClick={() => this.load(tarefa)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger"
                        onClick={() => this.remove(tarefa)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            );
        })
    }



    render(){        
        return(            
            <Main {...headerProps}>
                
                {this.renderForm()}
                {this.rendertable()}

            </Main>
        );
    }

}

