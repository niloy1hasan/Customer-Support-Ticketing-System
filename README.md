 ## Question & Answer
 **What is JSX, and why is it used?**

 #### Answer: 

 JSX is Javascript XML. It is used in React to write HTML-like code inside Javascript.

 
 **What is the difference between State and Props?**

 #### Answer: 

State: State is used to store data that can change over time within a component.

Props: Props are parameters passed to a React component to provide data.


 **What is the useState hook, and how does it work?**

 #### Answer: 

 useState hook is allow to store data, change data, and notify data changed where data used.

 useState function return to values.
 - state value
 - function for updating value

 example: const [count, setCount] = useState(0);  


 **How can you share state between components in React?**

 #### Answer: 

 Props drilling: 
 Pass state value as props from a parent to child components.

Lifting state up:
Pass a function from the parent to the child as a prop. The child calls this function to send data back to the parent or update value.


 **How is event handling done in React?**
  #### Answer: 

1. normal function: 
  
function show(){
alert('message');
}

  onClick={show}

2. arrow function:

  const showAlert = () => {
    alert('message');
  }

  onClick={()=>showAlert()}

3. Inline function:
  - onClick={() => alert('message')}

4. with parameter:

  function show(msg) {
  alert(msg);
}
  - onClick={() => show('message')}




 