import jsonServerProvider from 'ra-data-json-server';
import { Admin, ListGuesser, Resource } from 'react-admin';
import TestCard from './test-card';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={TestCard} dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;
