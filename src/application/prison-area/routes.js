import * as components from './components';

export default [
    {
        path: '/prison-area/detail/:id',
        component: components.prisonAreaDetail,
        name: '监区明细'
    },
    {
        path: '/prison-area/list',
        component: components.prisonAreaList,
        name: '查询监区'
    },
    {
        path: '/prison-area/new',
        component: components.prisonAreaNew,
        name: '新增监区'
    },
    {
        path: '/prison-area/edit/:id',
        component: components.prisonAreaEdit,
        name: '修改监区'
    },
    {
        path: '/prison-area/dashboard',
        redirect: { name: 'dashboard' }
    }
];
