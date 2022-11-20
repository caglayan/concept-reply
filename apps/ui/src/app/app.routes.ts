import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'concept-reply',
    children: [
      {
        path: 'configuration',
        loadChildren: () => import('./config/config.module').then((m) => m.ConfigModule),
      },
    ],
  },
];
