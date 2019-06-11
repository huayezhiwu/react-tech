import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb, Icon } from 'antd';
import connect from 'connect';

@connect
class SiderBar extends React.Component {
    render() {
        const { Sider } = Layout;
        const {
            state: { collapsed, user, setRoutes }
        } = this.props;
        return (
            <Breadcrumb className="breadcrumb">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}
export default SiderBar;
