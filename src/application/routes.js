import { routes as login } from './login';
import { routes as dashboard } from './dashboard';
import { routes as me } from './me';
import { routes as tenant } from './tenant';
import { routes as prisonArea } from './prison-area';
import { routes as prisonHouse } from './prison-house';
import main from './main';

export default [
    {
        path: '/',
        component: main,
        children: [
            {
                path: '/',
                redirect: { name: '信息面板' }
            },
            ...dashboard,
            ...me,
            ...tenant,
            ...prisonArea,
            ...prisonHouse
        ]
    },
    ...login
];
