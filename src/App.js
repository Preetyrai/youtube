import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './util/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import Watchpage from './components/Watchpage';

function App() {
 const appRouter = createBrowserRouter([{
   path:'/',
   element:<Body/>,
   children:[
    {
      path:'/',
      element:<Maincontainer/>
    },
    {
      path:'watch',
      element:<Watchpage/>
    },
   ]
  }])
  return (
    <>
    <Provider store={store}>
    <Head/>
    <RouterProvider router={appRouter}/>
     </Provider>
    </>
  );
}

export default App;
