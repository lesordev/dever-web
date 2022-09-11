import { useRoutes } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
  ]);

  return routes;
}

export default App;
