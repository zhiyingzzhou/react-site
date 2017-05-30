import {onEnterLoginHook,requireAuthHook,onLeavePage} from '../hook';

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
            
        ]
    } 
  ]
}

export default RouteConfig;