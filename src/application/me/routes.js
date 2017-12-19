import * as components from './components';

export default [
  {
    path: '/me',
    component: components.userProfile,
    name: '修改个人信息'
  },
  {
    path: '/me/password',
    component: components.pwdModification,
    name: '修改密码'
  }
];
