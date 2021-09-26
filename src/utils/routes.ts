import GlobalDashboard from 'containers/GlobalDashboard'
import { Routable } from 'types/route'

export const routes: Routable[] = [
  {
    component: GlobalDashboard,
    exact: true,
    path: '/',
  },
]
