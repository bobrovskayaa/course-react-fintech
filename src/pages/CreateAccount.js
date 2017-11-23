import React from 'react';


import Button from '../components/Button/Button';
import FormField from '../components/FormField/FormField';
import FormText from '../components/FormText/FormText';
import Form from '../components/Form/Form';

const validateRequire = value => !value;

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      currency: '',
      description: ''
    };
  }

  formClear() {
    this.setState({
      name: '',
      currency: '',
      description: ''
    });
  }

  validationsForm() {
    let status = true;

    Object.keys(this.state).forEach(item => {
      if(validateRequire(this.state[item])) {
        status = false;
        return false;
      }
    });

    return status;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validationsForm()) {
      return;
    }

    this.props.createAccount(this.state);

    this.formClear();
  };

  createAccount = (newState) => {
    this.setState({
      accounts: {
        ...this.state.accounts,
        [Object.keys(this.state.accounts).length + 1]: newState
      }
    });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Добавить Покупку</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormField label='Название' name='name'>
            <FormText value={this.state.name} name='name' onChange={this.handleInputChange} />
          </FormField>

          <FormField label='Категория' name='currency'>
            <FormText value={this.state.currency} name='currency' onChange={this.handleInputChange} />
          </FormField>

          <FormField label='Цена' name='description'>
            <FormText value={this.state.description} name='description' onChange={this.handleInputChange} />
          </FormField>
          <br />
          <Button type='submit'>Отправить</Button>
        </Form>
      </div>
  )}
}
