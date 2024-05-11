import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CreateEntity from './pages/CreateEntity';
import UpdateEntity from './pages/UpdateEntity';
import DeleteEntity from './pages/DeleteEntity';
import AllEntities from './components/AllEntities';
import Sidebar from './components/Sidebar';
import Data from './pages/Data';
import UpdateSingleEntity from './pages/UpdateSingleEntity';
import UpdateData from './pages/UpdateData';
function App() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-row">

    <Sidebar/>
    <div className="p-2 m-2 flex items-start justify-center w-full">

    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/create-entity" element={<CreateEntity/>}/>
       <Route path="/update-entity" element={<UpdateEntity/>}/>
       <Route path="/update-entity/:entityName" element={<UpdateSingleEntity/>}/>
       <Route path="/delete-entity" element={<DeleteEntity/>}/>
       <Route path="/get-all-entities" element={<AllEntities/>}/>
       <Route path="/data/:entityName" element={<Data/>}/>
       <Route path="/data/:entityName/:id" element={<UpdateData/>}/>

    </Routes>
    </div>
    </div>

 </>

  );
}

export default App;
