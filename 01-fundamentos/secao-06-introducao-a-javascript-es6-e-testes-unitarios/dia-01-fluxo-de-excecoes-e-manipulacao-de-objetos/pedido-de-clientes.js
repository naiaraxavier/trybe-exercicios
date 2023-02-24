const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
const deliveryPerson = order.order.delivery.deliveryPerson;
const namePerson = order.name;
const phoneNumber = order.phoneNumber;
const street = order.address.street;
const addressNumber = order.address.number;
const apartment = order.address.apartment;
  return console.log(`Olá ${deliveryPerson}, entrega para: ${namePerson}, Telefone: ${phoneNumber}, R. ${street}, N°: ${addressNumber}, AP: ${apartment}`); 
};

customerInfo(order);

const orderModifier = (order) => {
const namePerson = order.name = 'Luiz Silva';
const pizza = Object.keys(order.order.pizza).join(', ');
const drink = order.order.drinks.coke.type;
const paymentTotal = order.payment.total = 50;
console.log(`Olá ${namePerson}, o total do seu pedido de ${pizza} e ${drink} é R$ ${paymentTotal},00.`);
};

orderModifier(order);