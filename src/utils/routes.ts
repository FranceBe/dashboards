import GlobalDashboard from 'containers/GlobalDashboard'
import SingleDeviceMonitor from 'containers/SingleDeviceMonitor'
import { Routable } from 'types/route'

export const routes: Routable[] = [
  {
    component: GlobalDashboard,
    exact: true,
    path: '/',
  },
  {
    component: SingleDeviceMonitor,
    exact: true,
    path: '/device/:id',
  },
]
