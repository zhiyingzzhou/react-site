// 已经登录如果再次进入登陆页,跳转到首页
export const onEnterLoginHook = (nextState,replace) => {
}

// 权限验证
export const requireAuthHook = (nextState,replace) => {
   const {location} = nextState;
   const {pathname} = location;
   if(pathname === 'publish'){
       replace('login');
   }
}

// 离开页面触发此钩子
export const onLeavePage = (nextState,replace) => {
}