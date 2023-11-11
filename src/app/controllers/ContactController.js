class ContactController {
  index(req, res) {
    // Listar todos os registros
    res.send('Send from contact controller');
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
