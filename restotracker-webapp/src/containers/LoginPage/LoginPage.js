import React from 'react';
import { Form } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../actions/actions';
import LoginLayout from '../../layouts/LoginLayout/LoginLayout';
import Logo from '../../public/restotracker.svg';
import NormalLoginForm from './LoginForm';
import './login-page.scss';

const LoginPage = () => {
  const LoginForm = Form.create()(NormalLoginForm);
  return (
    <LoginLayout>
      <div className="login-body">
        <div className="left-container">
          <div className="logo">
            <img src={Logo} alt="RestoTracker logo" />
          </div>
          <p className="your-fave-rt">The best sample restaurant tracker ever</p>
        </div>
        <LoginForm />
      </div>
    </LoginLayout>
  );
};

LoginPage.propTypes = {};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
