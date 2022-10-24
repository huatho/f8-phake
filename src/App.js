import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import LearningPath from './pages/LearningPath';
import Courses from './pages/Courses';
import Blog from './pages/Blog';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learning-path" element={<LearningPath />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>
    );
}

export default App;
