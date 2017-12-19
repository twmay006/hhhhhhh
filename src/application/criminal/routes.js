import * as components from './components';

export default [
    {
        path: '/criminal/detail/:id',
        component: components.criminalDetail,
        name: '罪犯明细'
    },
    {
        path: '/criminal/list',
        component: components.criminalList,
        name: '查询罪犯'
    },
    {
        path: '/criminal/new',
        component: components.criminalNew,
        name: '新增罪犯'
    },
    {
        path: '/criminal/edit/:id',
        component: components.criminalEdit,
        name: '修改罪犯'
    },
    {
        path: '/criminal/dashboard',
        redirect: { name: 'dashboard' }
    }
];
