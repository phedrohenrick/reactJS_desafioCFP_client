import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PaperService from '../service/PaperService';

const UpdatePaperComponent = () => {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();
  
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [nomeDoAutor, setNomeDoAutor] = useState('');
  const [email, setEmail] = useState('');

  // Carregar os dados do paper quando o componente for montado
  useEffect(() => {
    if (id) {
      PaperService.getPaperById(id).then((res) => {
        const paper = res.data;
        setTitulo(paper.titulo);
        setResumo(paper.resumo);
        setNomeDoAutor(paper.nomeDoAutor);
        setEmail(paper.email);
      }).catch((error) => {
        console.error('Error loading paper data:', error);
      });
    }
  }, [id]);

  // Função para atualizar o paper
  const handleUpdate = (event) => {
    event.preventDefault();

    const paperData = {
      titulo,
      resumo,
      nomeDoAutor,
      email
    };

    // Envia a requisição PUT para o backend
    fetch(`/api/paper/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paperData)
    })
    .then((response) => {
      if (response.ok) {
        alert('Paper updated successfully!');
        navigate("/list"); // Redireciona para a página de visualização após atualização
      } else {
        alert('Failed to update paper');
      }
    })
    .catch((error) => {
      console.error('Error updating paper:', error);
      alert('Error updating paper');
    });
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">Atualizar Paper</h3>
            <div className="card-body">
              <form onSubmit={handleUpdate}>
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
                  Cancelar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePaperComponent;
