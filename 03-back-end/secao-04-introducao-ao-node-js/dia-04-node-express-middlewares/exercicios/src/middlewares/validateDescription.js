// 6 - Crie um middleware de validação para a chave description que possui as chaves createdAt, rating e difficulty. Ela deve:
// Ter todas as chaves obrigatórias;
// Retornar o status 400 para todas e uma mensagem em formato json;
// Sugestão: { "message": "O campo description é obrigatório" };
// Sugestão: { "message": "O campo createdAt é obrigatório" };
// Sugestão: { "message": "O campo rating é obrigatório" };
// Sugestão: { "message": "O campo difficulty é obrigatório" }.

const validateDescription = (req, res, next) => {
  const { description } = req.body;
  const requiredProperties = ['createdAt', 'rating', 'difficulty'];
  const validateTypeof = typeof description === 'object' && !Array.isArray(description);
  if (!description || !validateTypeof) {
    return res
    .status(400).json({ message: 'O campo description é obrigatório e deve ser um objeto' });
  }
  if (!requiredProperties.every((prop) => prop in description)) {
    return res.status(400).json({ message: 'Alguma chave está faltando' });
  }
  next();
};

module.exports = validateDescription;