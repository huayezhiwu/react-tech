import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import connect from 'connect';
import SiderBar from './sider';
import BreadCrumbs from './breadCrumbs';
import './index.module.less';

@connect
export default class extends React.Component {
    render() {
        const { Header, Sider, Content } = Layout;

        const {
            children,
            state: { collapsed }
        } = this.props;
        // console.log(this.props, 'layout ');
        return (
            <Layout className="layout-wrapper">
                <SiderBar />
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.changeCollapsed}
                        />
                        <BreadCrumbs />
                    </Header>

                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280
                        }}
                    >
                        <div>{children}</div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
