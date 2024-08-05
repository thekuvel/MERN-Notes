# React Topics

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

### React Component
A react component is a jsx(javascript xml), that allows us to write html and JS together. Used to create templates also known as components.

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

**State**<br/>
It is a value change causing the re-rendering.<br>

```jsx
const [count, setCount] = useSate(0)
```

"count" is the State that will cause re-rendering when it is changed by setCount.<br/>
<br/><br/>

**Componenets Life Cycle**<br/>
1. Initialization : JS loads the JSX into the memory
2. Mounting : JSX gets loaded into the RealDOM
3. Updating : Some contents or state gets updated in the Real Dom
4. Unmounting : Removing the element from the RealDOM
<br/><br/>

**In HTML use**<br/>
onChange = to capture change in input.<br/>
onClick = to capture click event.<br/>
<br/><br/>
