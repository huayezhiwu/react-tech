import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { message } from 'antd';
import actions from 'actions';
import Layout from 'views/layout';
import { whiteList } from '../config';
import { LocalStorage, Cookie } from 'utils/storage';
import { allRoutes, asyncRouterMap } from './config';
// 获取对象数组中的一个对象
const getRoute = (routers, pathname) => {
    let fn = routers =>
        routers.map(route => {
            if (route.path === pathname && !route.children) return route;
            if (route.children) return fn(route.children);
            return false;
        });
    return fn(routers).find(route => route);
};

/*404判断*/
const isExistPath = (routers, pathname) =>
    routers.some(route => {
        if (route.pathname === pathname && !route.children) return true;
        if (route.children) return isExistPath(route.children, pathname);
        return false;
    });

const routeComponent = route => (
    <Route
        key={route.path}
        exact={route.exact || false}
        path={route.path}
        component={route.component}
    />
);
// render
const renderRouteComponent = routers =>
    routers.map(route => routeComponent(route));

// layout 渲染
const componentByLayout = ({ history }) => (
    <Layout>
        <Switch>
            {renderRouteComponent(allRoutes.filter(route => route.layout))}
        </Switch>
    </Layout>
);

class MainComponent extends React.Component {
    async getUserInfo(token, cb) {
        try {
            await this.props.getUserInfo(token);
        } catch (e) {
            message.error(e);
        }
        cb && cb();
    }

    hasPermission = (route, roles) => {
        if (route.roles) {
            return roles.some(role => route.roles.indexOf(role) > -1);
        } else {
            return true;
        }
    };

    filterRouterByRole = (router, roles) =>
        router.filter(route => {
            if (hasPermission(route, roles)) {
                if (route.children && route.children.length) {
                    route.children = filterRouterByRole(route.children, roles);
                }
                return true;
            } else {
                return false;
            }
        });

    // 设置路由
    setRoutersByRole = roles => {
        let routers = [];
        if (roles.indexOf('admin') > -1) {
            routers = allRoutes;
        } else {
            routers = filterRouterByRole(allRoutes, roles);
        }
        this.props.setRoutes(routers);
    };

    render() {
        const {
            location: { pathname },
            user
        } = this.props;

        let curRoute = getRoute(allRoutes, pathname);
        document.title = curRoute.name;

        // 白名单认证(是否需要登录验证),以下是需要登录后才展示的页面
        if (!whiteList.find(path => path === curRoute.path)) {
            const token = Cookie.get('token');
            // 登录验证
            if (!token) {
                return <Redirect to={{ pathname: '/login' }} />;
            }
            // 登录后获取用户信息
            if (!user) {
                this.getUserInfo(token, () => {
                    this.setRoutersByRole(this.props.user.roles);
                    console.log(this.props, 'router userlogin///////////////');
                });
            }
        }

        // console.log(
        //     curRoute,
        //     this.props,
        //     // renderRouteComponent(allRoutes),
        //     'router'
        // );

        return (
            <div className="main">
                <Switch>
                    {renderRouteComponent(
                        allRoutes.filter(router => !router.layout)
                    )}
                    <Route path="/" component={componentByLayout} />
                </Switch>
            </div>
        );
    }
}
export default connect(
    state => ({
        user: state.user,
        routes: state.routes
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(MainComponent);
