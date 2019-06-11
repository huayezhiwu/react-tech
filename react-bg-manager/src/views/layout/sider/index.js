import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import connect from 'connect';

const createSubMenu = route => {
    return (
        <Menu.SubMenu
            key={route.path}
            title={
                <span>
                    <Icon type={route.icon} />
                    <span>{route.name}</span>
                </span>
            }
        >
            {route.children &&
                route.children.map(child => {
                    if (!child.children) {
                        return (
                            <Menu.Item key={child.path}>
                                <Link to={child.path}>
                                    <span>{child.name}</span>
                                </Link>
                            </Menu.Item>
                        );
                    }
                    return createSubMenu(child);
                })}
        </Menu.SubMenu>
    );
};

@connect
class SiderBar extends React.Component {
    render() {
        const { Sider } = Layout;
        console.log(this.props, 'sider');
        const {
            state: { collapsed, user, setRoutes }
        } = this.props;
        return (
            <Sider trigger collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {setRoutes &&
                        setRoutes.map(route => {
                            if (route.hidden) return;
                            if (!route.children) {
                                return (
                                    <Menu.Item key={route.path}>
                                        <Link to={route.path}>
                                            <Icon type={route.icon} />
                                            <span>{route.name}</span>
                                        </Link>
                                    </Menu.Item>
                                );
                            }
                            return createSubMenu(route);
                        })}
                </Menu>
            </Sider>
        );
    }
}
export default SiderBar;
