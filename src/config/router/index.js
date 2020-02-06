import Home from '../../containers/pages/Home';
import dataTable from '../../containers/pages/table';
import Chart from '../../containers/pages/chart';
import RatingAlert from '../../containers/pages/alert';

const pageRoutes = () => {
  return [
    {
      path: '/alert',
      link: '/alert',
      icon: 'alert',
      name: 'Alert',
      component: RatingAlert
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