export interface NavigationNode{
    label?:string;
    routerLink?:string;
    permissionName?:string;
    icon?:string;
    items?:NavigationNode[];
}

export var navigation:NavigationNode[]=[
  {
    label:'Home',
    items: [
      {
        label:'Dashboard',
        routerLink:'/',
        permissionName:'DASHBOARD_VIEW'
      }
    ]
  },
  {
    label:'Masterfile',
    items:[
        {
            label:'Branch',
            routerLink:'/branch',
            permissionName:'BRANCH_VIEW'
        },
        {
          label:'Customer',
          routerLink:'/customer',
          permissionName:'CUSTOMER_VIEW',
          items:[
            {
              label:'Test',
              routerLink:'/customer/test',
              permissionName:'TEST_VIEW'
            },
            {
              label:'Test',
              routerLink:'/customer/test',
              permissionName:'TEST_VIEW'
            }
          ]
      }
    ]
  }  
];