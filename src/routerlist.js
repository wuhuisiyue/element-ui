import routerConfig from './nav.config.json';

const registerRoute = (config) => {
  let route = [];
  config.groups.map(group => 
    group.list.map((item,i) => 
    {
      route.push({
        name: item.path.slice(1),
        path: item.path,
        component: resolve => require([`./components${item.path}`],resolve),
        meta: {
          title: item.title || item.path.slice(1)
        }
      })
    }
  )
);
  // config.map(nav =>
    //   nav.list.map(page =>
    //     route.push({
    //       name: page.name,
    //       path: '/'+page.name,
    //       component: resolve => require([`./components/${page.name}`],resolve),
    //       meta: {
    //         title: page.title || page.name
    //       }
    //     })
    //   )
  // );
  
  return route;
};

let nav = routerConfig['zh-CN'];
const route = registerRoute(nav[0]);

route.push({
  path: '/',
  component: resolve => require(['./components/Index'],resolve),
  meta: {
    title: 'Element-UI'
  }
});

export default route;
