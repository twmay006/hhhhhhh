import * as components from './components';

export default [
    {
        path: '/tenant/detail/:id',
        component: components.tenantDetail,
        name: '租户明细'
    },
    {
        path: '/tenant/list',
        component: components.tenantList,
        name: '查询租户'
    },
    {
        path: '/tenant/new',
        component: components.tenantNew,
        name: '新增租户'
    },
    {
        path: '/tenant/edit/:id',
        component: components.tenantEdit,
        name: '修改租户'
    },
    {
        path: '/tenant/dashboard',
        redirect: { name: 'dashboard' }
    }
];
