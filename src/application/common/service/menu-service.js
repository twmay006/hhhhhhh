  // import axios from 'axios';

  export default [
    {
        index: '1',
        name: '监区',
        collapse: true,
        children: [
            {
                index: '1-1',
                name: '查询监区',
                path: '/prison-area/list',
                collapse: true
            },
            {
                index: '1-4',
                name: '新增监区',
                path: '/prison-area/new',
                collapse: true
            }
        ]
    },
      {
          index: '2',
          name: '监舍',
          collapse: true,
          children: [
              {
                  index: '2-1',
                  name: '监舍列表',
                  path: '/prison-house/list',
                  collapse: true
              },
              // {
              //     index: '1-2',
              //     name: '监舍明细',
              //     path: '/prison-house/detail',
              //     collapse: true
              // },
              {
                  index: '1-3',
                  name: '新增监舍',
                  path: '/prison-house/new',
                  collapse: true
              }
              // {
              //     index: '1-4',
              //     name: '修改监舍',
              //     path: '/prison-house/edit',
              //     collapse: true
              // }
          ]
      },
      {
          index: '3',
          name: '租户',
          collapse: true,
          children: [
              {
                  index: '3-1',
                  name: '租户列表',
                  path: '/tenant/list',
                  collapse: true
              },
              // {
              //     index: '3-2',
              //     name: '租户明细',
              //     path: '/tenant/detail',
              //     collapse: true
              // },
              {
                  index: '3-4',
                  name: '新增租户',
                  path: '/tenant/new',
                  collapse: true
              }
              // {
              //     index: '3-5',
              //     name: '修改租户',
              //     path: '/tenant/edit',
              //     collapse: true
              // }
          ]
      },
      {
          index: '4',
          name: '罪犯',
          collapse: true,
          children: [
              {
                  index: '4-1',
                  name: '查询罪犯',
                  path: '/prison-area/list',
                  collapse: true
              },
              {
                  index: '4-4',
                  name: '新增罪犯',
                  path: '/prison-area/new',
                  collapse: true
              }
          ]
      }
  ];
