function Fruitorder() {
    const fruitOrder = [
        {
          name: "Apple",
          qty: 3,
          singlePrice: 0.25,
        },
        {
          name: "Mango",
          qty: 6,
          singlePrice: 0.35,
        },
        {
          name: "Banana",
          qty: 4,
          singlePrice: 0.15,
        },
      ];
    
      const mappedFruitOrder = fruitOrder.map(function (order, index) {
        return `${index + 1}) ${order.qty} units of ${order.name} costs $${(order.singlePrice * order.qty).toFixed(2)}.`;
    });
    
    console.log(mappedFruitOrder);
  }
  
  export default Fruitorder;