import {RouterModule, Routes} from '@angular/router';
import {ConfigResolverService, LayoutComponent, LeftNavComponent, HeaderComponent, TenantNavComponent} from '@labshare/ngx-base-components';
import {NgxProjectsComponent} from '../../../ngx-projects/src/lib/ngx-projects.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'labshare',
    pathMatch: 'full'
  },
  {
    path: 'labshare',
    component: LayoutComponent,
    resolve: {items: ConfigResolverService},
    children: [
      {
        path: '',
        component: LeftNavComponent,
        data: {
          items: [
            {id: 'left.home', icon: 'icon-Pages', text: `Home`, link: '#'}
          ]
        },
        outlet: 'left'
      },

      {
        path: '',
        children: [
          {
            path: '',
            component: NgxProjectsComponent
          },
          {
            path: '',
            component: NgxProjectsComponent,
            outlet: 'center'
          }
        ]
      },
      
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header',
        data: {
          config: {
            icon: 'icon-LsStorageIcon',
            text: 'Storage',
            leftNavList: [],
            centerNavList: [],
            rightNavList: [
              {
                click: 'search-click',
                type: 'i',
                icon: 'icon-lsi-search'
              },
              {
                click: 'search-click',
                type: 'i',
                icon: 'icon-lsi-bell'
              },
              {
                click: 'search-click',
                type: 'i',
                icon: 'icon-lsi-settings'
              },
              {
                click: 'search-click',
                type: 'i',
                icon: 'icon-lsi-user'
              }
            ]
          }
        }
      },
      {
        path: '',
        component: TenantNavComponent,
        outlet: 'tenant'
      }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);

