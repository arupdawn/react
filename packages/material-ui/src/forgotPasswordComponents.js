import PropTypes from 'prop-types';
/* eslint-disable no-shadow */
import React from 'react';
import Flexbox from 'flexbox-react';
import getContext from 'recompose/getContext';
import Container from './Container';
import Content from './Content';
import FormError from './FormError';
import Header from './components/header';
import Avatar from './components/avatar';
import EmailField from './components/email';
import SubmitButton from './components/submitButton';

const ForgotPasswordFields = ({ children }) =>
  <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
    {children}
  </Flexbox>;

ForgotPasswordFields.propTypes = {
  children: PropTypes.node,
};

const LoginButton = getContext({
  setFormType: PropTypes.func,
})(({ setFormType, ...otherProps }) =>
  <Flexbox>
    <a
      href="#/"
      style={{
        fontFamily: 'Roboto',
        textDecoration: 'none',
        fontSize: 16,
      }}
      onClick={() => setFormType('login')}
      {...otherProps}
    >
      Log in
    </a>
  </Flexbox>);

const Footer = ({ ...otherProps }) =>
  <LoginButton {...otherProps} />;

Footer.propTypes = {
  SignupButton: PropTypes.node,
};

export default {
  Container,
  Content,
  Avatar,
  ForgotPasswordFields,
  ForgotPasswordEmailField: EmailField,
  ForgotPasswordButton: SubmitButton,
  Header,
  Footer,
  FormError,
};
