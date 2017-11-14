 /*
  * Нужно создать компонент Money
  * Который принимает
  * - value - значение, может быть дробным
  * - currency - тип валюты, "RUB", "EUR", "GBP", "USD"
  * Маска для валют RUB = ₽, EUR = €, GBP = £, USD = $
  * К примеру, мы передаем value = 4000.45, currency = RUB - Получаем <span><span>4000</span><span>,45</span><span>₽</span></span>
  * */

import React from 'react';

export default ({ value, currency }) => {
  const part1 = value.toString().split('.')[0];
  const part2 = value.toString().split('.')[1];

  const enum_curr = {
    RUB: '₽', 
    EUR: '€', 
    GBP: '£', 
    USD: '$'
  }
  return (
  <span>
    <span>{part1}</span>
    {part2 ? <span>,{part2}</span> : ""}
    {currency ? <span>{enum_curr[currency]}</span> : ""}
    </span>
  )
};
  

