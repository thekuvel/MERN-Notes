# React Topics

<details>
  <summary> Folder Structure Details </summary>

  "node_modules" folder:
  "package.json" file:
  "package-lock.json" file:
  "vite.config.js" file:
  "index.html" file:
  "main.jsx" or "index.jsx" file :
  
</details>

<details>
  <summary> Create React App  </summary>
  
  ```console
npm create vite@latest
√ Project name: ... Day22-ReactComponentsLandingPage //Enter your folder name 
√ Package name: ... day22-reactcomponentslandingpage //Enter your pakage name 
√ Select a framework: » React //Select React framework 
√ Select a variant: » JavaScript + SWC //Select js+swc varient 

cd Day22-ReactComponentsLandingPage
npm install //Creates node_modules folder inside Project folder
npm run dev //run the react app in local environment
```

</details>

<br/><br/><br/>

# React Component
A react component is a jsx(javascript xml), that allows us to write html and JS together. Used to create templates also known as components.
- Components name start with capital letter

```jsx
const StudentCard = ({data}) => {
    console.log("card")
    return (
        <>
          <h3>{data.name}</h3>
          <p>{data.emailID}</>
        </>
    )
}

export default StudentCard
```

**Props**  
In the above example "data" is props (properties).  
Static value passed during rendering.<br/>

```jsx
import PropTypes from "prop-types";

StudentCard.propTypes = {
  name : PropTypes.string;.
  emailID : PropTypes.string,
};
```

**Parameter**  
Here data is called parameter
```jsx
  <StudentCard data={data}>
```

**State**<br/>
It is a value change causing the re-rendering.<br>

```jsx
const [count, setCount] = useSate(0)
```

"count" is the State that will cause re-rendering when it is changed by setCount.<br/>
<br/><br/>

## Componenets Life Cycle
1. Initialization : JS loads the JSX into the memory
2. Mounting : JSX gets loaded into the RealDOM
3. Updating : Some contents or state gets updated in the Real Dom
4. Unmounting : Removing the element from the RealDOM
<br/><br/>

**In HTML use**<br/>
onChange = to capture change in input.<br/>
onClick = to capture click event.<br/>
<br/><br/>

## React Router DOM
Install react router dom in the project folder.
```console 
npm i react-router-dom
```
<details>
  <summary>Router and Layout syntax</summary>

  App.jsx
  ```jsx
  import './App.css'

  import { BrowserRouter,Routes,Route } from "react-router-dom";
  
  import Layout from "./layout/Layout.jsx"
  import Home from './pages/Home.jsx'
  
  function App() {
  
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
  
  export default App
  ```

  Layout.jsx
  ```jsx
  import {Outlet} from "react-router-dom"
  
  function Layout(){
      return(
          <>
  
              <Outlet/>
  
          </>
      )
  }
  
  export default Layout
  ```

  Home.jsx
  
  ```jsx
  function Home(){
      return(<>
          <h1>HomePage</h1>
      </>)
  }
  
  export default Home
  ```
  
</details>

Use Navigate
useNavigate - To NAVIGATE to other page and pass PROPS.

Use Location

<details>
  <summary>
    Props drilling and Context
  </summary>

  **Context**<br>

  A [Context.jsx](./ReactExamples/Context/Context.jsx) file for reference.<br/>
  
  - Creation
    ```jsx
    import {createContext} from "react"
    const ModeContext = createContext(null)
    ```
  - Provider
    ```jsx
    const [mode,setMode] =  useState("light")
    <ModeContext.Provider value = {mode, changeMode}>
      <SubLayout/>
    </ModeContext.Provider>
    ```
  - Subscriber
    Insede SubLayOut
    ```jsx
     const {mode : mode, changeMode} = useContext(ModeContext);
    ```
  
</details>

<details>
  <summary>
    Path params and Search Params
  </summary>

  Path Params

  Search Params
  
</details>

<details>
  <summary>
    useRef and useReducer
  </summary>

  <h4>useRef</h4>
  Do Not use in rendering
  Hook to access DOM element.  
  ref.current === e.target (very similar)
  let ref = useRef(null) 
  ref.current.style.color = "green"  
  
  <h4>useReducer</h4>
  Reducer is a function used to manipulate a single value in different sccenarios.  
  
  ```jsx
  //Normal way

  function handleMove(move){
  switch(move){
    Case "up"
    if(pos.top !== 0){
    pos.top = pos.top-100px;
    }
    break;
    Case "dowm"
    if(pos.top !== 200){
    pos.top = pos.top+100px;
    }
    break;
  }
  }
  ```

  ```jsx
  // Reducer
  const moveReducer = (state = {top:0,left:0}, action)=>{
      switch(action){
      Case "up"
      if(state.top !== 0){
      return {
        ...state,
        top: state.top + 100,
      }
      }
      return state
      Case "down"
      if(state.top !== 200){
      return {
        ...state,
        top: state.top + 100,
      }
      }
      return state
  
    }
  }


  let [pos, dispatch] = useReducer(moveReducer, {top:0, left:0});

  return(
<>
<button onClick={()=>dispatch("up")}>UP</button>
<button onClick={()=>dispatch("down")}>Down</button>
</>
)
  ```
  
</details>


**_redirects file**


<details>
  <summary>
    Axios Example
  </summary>

  ```jsx
import axios from "axios";

const instance = axios.create({
    baseURL : url,
    timeout : 1000,
    headers : {
        'X-Custom-Header': 'foobar'
    }
})

//Using simple axios call
async function GetAllPassword(){
    let res = await axios.get(url)
    return(res.data)
}

//using axios instance
async function GetSinglePassword(id){
    let res = await instance.get(`/${id}`);
    // console.log(data);
    return(res.data)
    
}


async function CreatePassword(payLoad) {

    let res = await instance.post("/",payLoad)
    console.log(res.data)

    window.location.reload();
    
}

async function  DeletePassword(id) {
    let res = await instance.delete(`/${id}`)    
}


async function EditPassword(cardId,data){
    // console.log(cardId,data);
    
    let res = await instance.put(`/${cardId}`,data)
    console.log(res.data);

    window.location.reload();
    
}


export {GetAllPassword, GetSinglePassword, CreatePassword, DeletePassword, EditPassword}
```
  
</details>


