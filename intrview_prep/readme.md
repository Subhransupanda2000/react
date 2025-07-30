
# Difference between statefull vs stateless component in reactjs
* There are two type of component in react statefull and stateless
* what states are doing . They are managing variables error message flags inputfields etc
# Statefull:
* used by class component
* managing lifecycle methods such as when it is mounted updated or unmounted
* When to use this: when component behaviour need to be dynamic and respond to user interaction
* when we are working with statefull we need to consider few things 1. keep the state minimal 2.immutable state means dont need to set directly u can use setState 3.properly handle asynchronous update 4. Divide the component in to smaller task 5.optimize rerenders using shouldcomponentupdate() or memoize technique
# Stateless:
* Stateless components are known as functional component
* stateless component are return jsx
* without managing any lifecyle hooks are taking care of mounting updating unmounting
* reusable
* props are taking vital role here to pass the data and reuse
* When we are working with stateless few rhing we need to take care: 1.Focus on pure rendering 2.No internal state 3.Reusability 4.perfomance benifits bcz not managing any state 5. Easier testing 
