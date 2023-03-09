import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';

import { PostList } from './posts';
import { CommentList } from './comments';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    <Resource name="comments" list={CommentList} />
  </Admin>
);

export default App;
