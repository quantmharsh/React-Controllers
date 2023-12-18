import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [products ,setproducts] =useState([]);
  const[error ,seterror]=useState(false);
  const[loading , setloading]=useState(false);
  const[search ,setsearch]=useState('');

  //here we will use  useeffect to  so data on components
  //instead of using simple useeffect here we will use 
  //iif (imidiately invoked function) it gets invoked automatically 
  //represented by ()() we are using it here because we want to use async await inside of hook
  
  useEffect(() => {
    //this controller terminates the previous response automatically
    // (controller consist of 4 steps) 
    //1.step
    const controller= new AbortController();
    //using semicolon so that if old code completes then it will execute it provides safety
    ;(async()=>{
      //using try catch block 
    
      //handling two cases  1st when there is error using try catch blcok
      //2 nd when api take time to send response we will add loading
      try {
        //making loading true since we are loading/fetching data
        setloading(true);
        seterror(false);
        // const response= await  axios.get('/api/products');
        //for searching modifying it 
        //2nd step pass signal as a parameter same like this
        const response= await  axios.get('/api/products?search='+search ,{signal:controller.signal});
        
        console.log(response.data);
        setproducts(response.data);
        //after fetching set loading to false
        setloading(false);
        

      } 
      catch (error) {
        //step 3 handle controll error this is one demerit of it
        if(axios.isCancel(error))
        {
          console.log('Request canclled' ,error.message);
          return
        }
        seterror(true);
        //if there is error then   set loading to  false
        setloading(false);    
        
      }

    })()
    //step 4 using cleanup method to remove or unmount components 
    return()=>{
      controller.abort();
    }
    //here we are updating depedenci array this means whenever 
    //particular action will work then this useeffect will be called automatically
  }, [search])
  // if(error)
  // {
     
  //    return <h2> Something went wrong</h2>
   
  // }
  // if(loading)
  // {
  //   return  <h2> Loading...🔃</h2>
  // }
  //or
 
 
  
  return (
    <>
      <div>
      {loading &&(<h2> Loading...🔃</h2>)}
 {error && ( <h2> Something went wrong</h2>)}
  {/* //creating search bar which will show results which have simiar material */} 
  {/* //Note this will send multiple fetch request to api on every alphabet click
  so to handle this we are using controller we use it when we are using axios*/}
    <input type="text"  placeholder='search' value={search} 
    onChange={(e)=>setsearch(e.target.value)}
    /> 
        <h1>Chai aur API in react</h1> 
        <h2> Total no. of products  {products.length}</h2>
        
       </div>
    </>
  )
}

export default App
