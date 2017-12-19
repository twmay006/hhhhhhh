import * as components from './components';

export default [
    {
        path: '/prison-house/detail/:id',
        component: components.prisonHouseDetail,
        name: '监舍明细'
    },
    {
        path: '/prison-house/list',
        component: components.prisonHouseList,
        name: '查询监舍'
    },
    {
        path: '/prison-house/new',
        component: components.prisonHouseNew,
        name: '新增监舍'
    },
    {
        path: '/prison-house/edit/:id',
        component: components.prisonHouseEdit,
        name: '修改监舍'
    }
];
