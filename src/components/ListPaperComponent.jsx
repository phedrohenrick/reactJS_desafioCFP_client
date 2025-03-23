import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter';
import PaperService from '../services/PaperService';

class ListPaperComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            papers: []
        };

        this.addPaper = this.addPaper.bind(this);
        this.editPaper = this.editPaper.bind(this);
        this.deletePaper = this.deletePaper.bind(this);
    }

    // Método para deletar um paper
    deletePaper(id) {
        PaperService.deletePaper(id).then(() => {
            this.setState({ papers: this.state.papers.filter(paper => paper.id !== id) });
        });
    }

    // Método para editar um paper
    editPaper(id) {
        this.props.navigate(`/update-Paper/${id}`);
    }

    // Buscar lista de papers ao carregar a página
    componentDidMount() {
        PaperService.getPapers().then((res) => {
            if (!res.data || res.data.length === 0) {
                this.props.navigate('/add-paper/_add');
            }
            this.setState({ papers: res.data });
        });
    }

    // Método para adicionar um novo paper
    addPaper() {
        this.props.navigate('/');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Papers</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addPaper}>Adicionar Paper</button>
                </div>
                <br />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Resumo</th>
                                <th>Nome do Autor</th>
                                <th>Email</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.papers.map((paper) => (
                                <tr key={paper.id}>
                                    <td>{paper.titulo}</td>
                                    <td>{paper.resumo}</td>
                                    <td>{paper.nomeDoAutor}</td>
                                    <td>{paper.email}</td>
                                    <td>
                                        <button onClick={() => this.editPaper(paper.id)} className="btn btn-info">Editar</button>
                                        <button style={{ marginLeft: "10px" }} onClick={() => this.deletePaper(paper.id)} className="btn btn-danger">Excluir</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(ListPaperComponent);
