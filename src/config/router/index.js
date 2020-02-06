import Home from '../../containers/pages/Home';
import dataTable from '../../containers/pages/table';
import Chart from '../../containers/pages/chart';

const pageRoutes = () => {
  return [
    {
      path: '/home',
      link: '/home',
      icon: 'home',
      name: 'Home',
      component: Home
    },
    {
      path: '/table',
      link: '/table',
      icon: 'table',
      name: 'Table',
      component: dataTable
    },
    {
      path: '/chart',
      link: '/chart',
      icon: 'bar-chart',
      name: 'Chart',
      component: Chart
    }
  ]
}

export default pageRoutes();