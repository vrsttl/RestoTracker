import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { login } from '../../actions/actions';
import './login-page.scss';

const FormItem = Form.Item;
library.add(faFingerprint);

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div className="login-container">
          <FontAwesomeIcon className="fingerprint" icon="fingerprint" />
          <h2 className="sign-in-to-restot">Sign in to RestoTracker</h2>
          <h3 className="enter-your-details-b">Enter your details below.</h3>
          <div className="error-text-container">
            <p>
              {this.props.user.loginFailed
                ? 'Invalid username or password'
                : ''}
            </p>
          </div>
          <FormItem>
            <p className="input-label username">USERNAME</p>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Enter your username' }],
            })(
              <Input className="login-input" prefix="" placeholder="Enter your username" />,
            )}
          </FormItem>
          <FormItem>
            <p className="input-label password">PASSWORD</p>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Enter your password' }],
            })(
              <Input className="login-input" prefix="" type="password" placeholder="Enter your password" />,
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
            >
              <p className="button-text">Login</p>
            </Button>
          </FormItem>
        </div>
      </Form>
    );
  }
}

NormalLoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  form: PropTypes.objectOf(PropTypes.func).isRequired,
  validateFields: PropTypes.func,
  getFieldDecorator: PropTypes.func,
  loginFailed: PropTypes.bool,
  user: PropTypes.shape().isRequired,
};

NormalLoginForm.defaultProps = {
  validateFields: () => { },
  getFieldDecorator: () => { },
  loginFailed: null,
};

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
)(NormalLoginForm);
