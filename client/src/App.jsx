import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import HeaderBackend from './components/Header';
import Header from './components/elements/Header';
import Footer from './components/elements/Footer';
import FooterBackend from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';

import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';

import CreateService from './pages/CreateService';
import UpdateService from './pages/UpdateService';

import PostPage from './pages/PostPage';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import Blog from './pages/Blog';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <ScrollToTop />
      {currentUser ? (
      <HeaderBackend />
      ) : (
        <Header />
      )}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />


          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/update-product/:productId' element={<UpdateProduct />} />

          <Route path='/create-service' element={<CreateService />} />
          <Route path='/update-service/:serviceId' element={<UpdateService />} />
          
        </Route>

        <Route path='/projects' element={<Projects />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
        <Route path='/product/:productSlug' element={<ProductPage />} />

      </Routes>

      {currentUser ? (
      <FooterBackend />
      ) : (
        <Footer />
      )}
    </BrowserRouter>
  );
}
