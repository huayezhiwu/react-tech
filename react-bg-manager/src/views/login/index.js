import React from 'react';
import { Form, Input, Icon, Button, Checkbox, message } from 'antd';
import './index.module.less';
import connect from 'connect';

@connect
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = e => {
        e.preventDefault();
        // console.log('login view///////////');
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const { username, password } = values;
                const { userLogin } = this.props;
                try {
                    const user = await userLogin({ username, password });
                    // console.log('Received values of form: ', this.props);
                    this.props.history.push('/');
                } catch (e) {
                    message.error(e);
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-wrapper">
                <div className="wrapper">
                    <h1>后台管理系统</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your username!'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="user"
                                            style={{ color: 'rgba(0,0,0,.25)' }}
                                        />
                                    }
                                    placeholder="Username"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Password!'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{ color: 'rgba(0,0,0,.25)' }}
                                        />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Log in
                            </Button>

                            {/* Or <a href="">register now!</a> */}
                        </Form.Item>
                        <Form.Item style={{ marginBottom: 0 }}>
                            <pre style={{ lineHeight: '25px' }}>
                                Username: admin Password: 123456
                            </pre>
                            <pre style={{ lineHeight: '25px' }}>
                                Username: editor Password: 123456
                            </pre>
                            <pre style={{ lineHeight: '25px' }}>
                                Username: animate Password: 123456
                            </pre>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Form.create()(Login);
