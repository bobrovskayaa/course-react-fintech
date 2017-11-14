/*
  * Нужно создать компонент Button
  * Который принимает
  * - type - тип button
  * - children - текст button
  * - onClick - эввент на клик
  * */
import React from 'react';

export default ({ type, children, onClick }) => (
  <button type={type} onClick={onClick}>{children}</button>
);
