// 4 - Crie um middleware de validação para a chave name. Ela deve:
// Ser obrigatória;
// Ter mais de 4 caracteres;

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo name é obrigatório' });
  if (name.length < 4) {
    return res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  }
  next();
};

module.exports = validateName;