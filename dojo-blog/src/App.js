import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './Create.js';
import BlogDetail from './BlogDetails.js';
import useFetch from "./useFetch";
import NotFound from './NotFound.js';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home ></Home>} />
            <Route path='/create' element={<Create></Create>} />
            <Route path="/blogs/:id" element={<BlogDetail/>}></Route>
            <Route path='*' element={<NotFound></NotFound>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
