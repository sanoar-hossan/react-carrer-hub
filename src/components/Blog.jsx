import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="blogs grid grid-cols-1 mb-5 lg:grid-cols-2 lg:mb-10 mt-10 gap-3 mt-10">
                <div className="blog bg-slate-200"><h1>a. When should you use context API?</h1>Context API should be used when you need to share data between multiple components that are nested at different levels in the component tree. It helps avoid prop drilling, where data is passed through multiple levels of components as props, making it cumbersome and harder to maintain. Context API allows you to create a global state that can be accessed by any component in the tree without passing it down explicitly as props.</div>
                <div className="blog bg-slate-200"><h1>b. What is a custom hook?</h1> A custom hook is a function that allows you to reuse logic or state in multiple components. Custom hooks are written by you, the developer, and can be used to encapsulate complex logic, manage state, handle side effects, or abstract away repetitive code. Custom hooks are typically prefixed with "use" and can be used just like any other hook provided by React.</div>
                <div className="blog bg-slate-200"><h1>c. What is useRef?</h1>useRef is a hook provided by React that returns a mutable ref object. useRef can be used to get a reference to a DOM element or to store mutable values that won't trigger re-rendering of the </div>
                <div className="blog bg-slate-200"><h1>d. What is useMemo?</h1>useMemo is a hook provided by React that allows you to memoize the result of a computation and only recompute it when its dependencies change. It helps optimize performance by avoiding unnecessary re-computations of expensive operations or calculations. useMemo takes a function and an array of dependencies, and returns the memoized value.</div>

            </div>
        </div>
    );
};

export default Blog;