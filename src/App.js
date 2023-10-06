import { Route, Switch } from 'react-router-dom';
import Heading from './components/Heading';
import taskList from './components/taskList';
import taskForm from './components/taskForm';
import { GlobalContextProvider } from './context/GlobalContext';

import './App.css';

function App() {
  return (
    <div>
      <GlobalContextProvider>
        <Heading />
        <Switch>
          <Route path='/' component={taskList} exact />
          <Route path='/add' component={taskForm}/>
        </Switch>
      </GlobalContextProvider>
    </div>
  );
}

export default App;