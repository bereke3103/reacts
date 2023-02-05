import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Error from './pages/Error';
import Posts from './pages/Posts';
import PostsIdPage from './pages/PostsIdPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route>
        <Route path="posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostsIdPage />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
