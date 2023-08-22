// 5 - Crie um middleware de validação para a chave price. Ela deve:
// Ser obrigatória;
// Ser um número maior ou igual a zero;

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  console.log(typeof price);
  if (price === undefined) return res.status(400).json({ message: 'O campo price é obrigatório' });
  if (price < 0 || typeof price !== 'number') { 
    return res.status(400)
    .json({ message: 'O campo price deve ser um número maior ou igual a zero' });
  }
  next();
};

module.exports = validatePrice;