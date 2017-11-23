import React from 'react';
import Money from '../Money/Money';

import {
  NavLink
} from 'react-router-dom';

import './Sidebar.css';

export default ( {accounts} ) => {
  return (
    <div className='Sidebar'>
      <div className='Sidebar__header'>
        Счета
      </div>
      {
        Object.keys(accounts).map((item) => (
          <NavLink to='/account/321321' className='Link' activeClassName='Link--active'>
            <div className='Sidebar__account'>
              <div className='Sidebar__account-name'>
                {accounts[item].name}
              </div>
              <div className='Sidebar__account-amount'>
                <Money value={accounts[item].amount} currency={accounts[item].currency}/>
              </div>
            </div>
          </NavLink>
        ))
      }

      <NavLink to='/create-account' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            Добавить счет
          </div>
        </div>
      </NavLink>
    </div>
  )
}
