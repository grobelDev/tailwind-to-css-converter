import React, { Fragment, useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link,
  // useParams,
  // useLocation,
  // Redirect,
  // useRouteMatch
} from 'react-router-dom';
import AppContext from './App.Context';
import ATailwindConverter from './ATailwindConverter';

export default function App() {
  let [classInput, setClassInput] = useState('');
  // let convertedString =

  return (
    <Fragment>
      <Switch>
        <Route exact path='/'>
          <AppContext.Provider
            value={{ classInput: classInput, setClassInput: setClassInput }}
          >
            <Main classInput={classInput} setClassInput={setClassInput}></Main>
          </AppContext.Provider>
        </Route>
        <Route path='/'>
          <div>404 Error!</div>
        </Route>
      </Switch>
    </Fragment>
  );
}

function Main() {
  return (
    <Container>
      <Card></Card>
    </Container>
  );
}

function Container({ children }) {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6  py-5 lg:px-8'>
      {/* <!-- We've used 3xl here, but feel free to try other max-widths based on your needs --> */}
      <div className='max-w-3xl mx-auto'>{children}</div>
    </div>
  );
}

function Card({ children }) {
  const resource = useContext(AppContext);
  console.log(resource.classInput);

  return (
    <div className='bg-white overflow-hidden shadow rounded-lg'>
      <div className='border-b border-gray-200 px-4 py-5 sm:px-6'>
        <Input></Input>
      </div>
      <div className='px-4 py-5 sm:p-6'>
        {ATailwindConverter(resource.classInput)}
      </div>
    </div>
  );
}

function Input() {
  const resource = useContext(AppContext);

  return (
    <div>
      <label className='block text-sm font-medium leading-5 text-gray-700'>
        Tailwind to Vanilla CSS Converter
      </label>
      <div className='mt-1 flex rounded-md shadow-sm'>
        <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm'>
          class=
        </span>
        <input
          id='company_website'
          className='form-input flex-1 block w-full px-3 py-2 rounded-none rounded-r-md sm:text-sm sm:leading-5'
          placeholder='www.example.com'
          onChange={event => resource.setClassInput(event.target.value)}
        />
      </div>
    </div>
  );
}
