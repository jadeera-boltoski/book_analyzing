// import React from 'react'
import BookForm from './components/BookForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionList from './QuestionList';

function App() {
  return (
    <div className="">
      <Router>

      
      
        <div className="min-h-screen flex items-center justify-center">
          {/* <h1>hello</h1> */}
          {/* <Loginpage/> */}
          <Routes>

            <Route path="/" element={<BookForm />} />
            <Route path="/QuestionList" element={<QuestionList />} />
            


          </Routes>
        </div>
      

    </Router>
    </div>
  )
}

export default App