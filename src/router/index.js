import {onEnterLoginHook,requireAuthHook,onLeavePage} from '../hook';

// 登录页面子路由
const LoginPage = {
    path: 'login',
    onEnter:requireAuthHook,
    onLeave:onLeavePage,
    getComponent(nextState,cb){
        require.ensure([], (require) => {
            cb(null, require('pages/login').default)
        }, 'LoginPage')
    }
}

// 注册页面子路由
const RegisterPage = {
    path: 'register',
    onEnter:requireAuthHook,
    onLeave:onLeavePage,
    getComponent(nextState,cb){
        require.ensure([], (require) => {
            cb(null, require('pages/register').default)
        }, 'RegisterPage')
    }
}

//发布任务页面子路由
const PublishPage = {
    path: 'publish',
    onEnter:requireAuthHook,
    onLeave:onLeavePage,
    getComponent(nextState,cb){
        require.ensure([], (require) => {
            cb(null, require('pages/publish').default)
        }, 'PublishPage')
    }
}

//推广合作页面子路由
const MarketingPage = {
    path: 'marketing',
    onEnter:requireAuthHook,
    onLeave:onLeavePage,
    getComponent(nextState,cb){
        require.ensure([], (require) => {
            cb(null, require('pages/marketing').default)
        }, 'MarketingPage')
    }
}

// 联系我们页面子路由
const ConcatPage = {
    path: 'concat',
    onEnter:requireAuthHook,
    onLeave:onLeavePage,
    getComponent(nextState,cb){
        require.ensure([], (require) => {
            cb(null, require('pages/concat').default)
        }, 'ConcatPage')
    }
}

/*路由配置*/
let RouteConfig = {
  childRoutes: [ 
    {
        path: '/',
        component: require('../App').default,
        indexRoute: {
            onEnter:requireAuthHook,
            onLeave:onLeavePage,
            getComponent(nextState,cb){
                require.ensure([], (require) => {
                    cb(null, require('pages/home').default)
                }, 'HomePage')
            }
        },
        childRoutes: [
            LoginPage,
            RegisterPage,
            PublishPage,
            MarketingPage,
            ConcatPage
        ]
    } 
  ]
}

export default RouteConfig;