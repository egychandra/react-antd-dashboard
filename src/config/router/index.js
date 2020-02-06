import dataTable from '../../containers/pages/table';
import Chart from '../../containers/pages/chart';
import RatingAlert from '../../containers/pages/alert';

const pageRoutes = () => {
  return [
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
    },
    {
      path: '/alert',
      link: '/alert',
      icon: 'alert',
      name: 'Alert',
      component: RatingAlert
    }
  ]
}

export default pageRoutes();