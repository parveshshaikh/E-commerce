import {Route, Routes } from 'react-router-dom';
import { show } from './Action/Action';
import './App.css';
import {Header,Home,Menu, Menucontainer} from './Componant';
import { useDispatch ,useSelector} from 'react-redux';
function App() {
  const dispatch =useDispatch()
  const show_cart =useSelector((state)=>state.set.show_cart)
  return (
    <div className='w-full h-screen flex flex-col '>
    <Header/>
  
    <main className='mt-16 px-4 w-full' onClick={()=>dispatch(show(false))}>
    
    <Routes>
    <Route path='/E-commerce' element={<Home/>}/>
    <Route path='/menu' element={<Menucontainer/>}/>
    </Routes>
    </main>
    
    </div>
  );
}

export default App;
