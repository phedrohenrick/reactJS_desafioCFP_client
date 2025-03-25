import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PaperService from '../service/PaperService';
import '../App.css';

const CreateOrUpdatePaperComponent = () => {
  const { id } = useParams(); // Pega o ID da URL (se existir)
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [nomeDoAutor, setNomeDoAutor] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // Para exibir mensagens

  useEffect(() => {
    if (id) {
      PaperService.getPaperById(id).then((res) => {
        const paper = res.data;
        setTitulo(paper.titulo);
        setResumo(paper.resumo);
        setNomeDoAutor(paper.nomeDoAutor);
        setEmail(paper.email);
      }).catch((error) => {
        setMessage('Erro ao carregar os dados do Paper');
        console.error('Error loading paper data:', error);
      });
    }
  }, [id]);

  const handleSaveOrUpdate = (event) => {
    event.preventDefault();

    const paperData = { titulo, resumo, nomeDoAutor, email };

    const saveOrUpdateRequest = id
      ? PaperService.updatePaper(paperData, id)  // Atualiza se houver ID
      : PaperService.createPaper(paperData);    // Cria um novo Paper

    saveOrUpdateRequest
      .then(() => {
        setMessage(id ? 'Paper atualizado com sucesso!' : 'Paper criado com sucesso!');
        navigate('/list');
      })
      .catch((error) => {
        setMessage('Erro ao salvar o Paper');
        console.error('Error saving paper:', error);
      });
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">
              {id ? 'Atualizar Paper' : 'Adicionar Paper'}
            </h3>
            <div className="card-body">
              {message && <div className="alert alert-info">{message}</div>} {/* Exibe mensagens */}
              <form onSubmit={handleSaveOrUpdate}>
                <div className="form-group">
                  <label>Título:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Resumo:</label>
                  <textarea
                    className="form-control"
                    placeholder="Resumo"
                    value={resumo}
                    onChange={(e) => setResumo(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Nome do Autor:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome do Autor"
                    value={nomeDoAutor}
                    onChange={(e) => setNomeDoAutor(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Salvar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => navigate('/list')}
                  style={{ marginLeft: '10px' }}
                >
                  Listar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrUpdatePaperComponent;
