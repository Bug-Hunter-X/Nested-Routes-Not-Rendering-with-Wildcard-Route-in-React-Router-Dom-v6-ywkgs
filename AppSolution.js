import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nested" element={<NestedRoutes/>}/ >
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {return <div>Home</div>}
function About() {return <div>About</div>}
function NotFound() {return <div>404</div>}

function NestedRoutes(){
    return(
        <Routes>
            <Route path="/nested/one" element={<div>Nested One</div>}/>
            <Route path="/nested/two" element={<div>Nested Two</div>}/>
        </Routes>
    )
}
export default App; 