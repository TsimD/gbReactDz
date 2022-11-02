import './style/App.css';
import Chats from "./components/Chats";
import {Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./pages/Profile";
import ChatCont from "./components/ChatCont";
import PostsPage from "./pages/PostsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";



function App() {

 return (
    <div className="App">
      <header className="mineHeader">
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'blog'} element={<BlogPage/>}/>
          <Route path={'profile'} element={<Profile/>}/>
          <Route path={'chats'}element={<Chats/>}/>
          <Route path={'posts'}element={<PostsPage/>}/>
          <Route path={'register'}element={<RegisterPage/>}/>
          <Route path={'login'}element={<LoginPage/>}/>
          <Route path={'chat/:id'}element={<ChatCont/>} />
          <Route path={'*'} element={<NotFoundPage/>}/> //Это роут на любой другой неназначенный  маршрут
        </Routes>
      </header>
      <div className="container">

      </div>
    </div>
  );
}

export default App;
