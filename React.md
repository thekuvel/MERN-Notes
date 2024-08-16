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
