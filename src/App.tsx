import { Route, Routes } from 'react-router-dom';
import About from './About';
import Article from './Article';
import Articles from './Articles';
import Sidebar from './Sidebar';
import Contents from './Components/Contents';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contents/:contentName/:pageName" element={<Contents />} /> 
        <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
};

export default App;
