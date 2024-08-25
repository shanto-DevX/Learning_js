// fetch
/* 
    * https://blog.logrocket.com/fetch-api-node-js/
    * https://developer.mozilla.org/en-US/docs/Web/API/fetch
    * https://fetch.spec.whatwg.org/#fetch-method
    * ---------------------------------------------------
    * -> Micro Task Queue
    * -> Priyority Queue
    * -> Fetch Queue
    
    ```
     response = fetch("Something")
        1)  
            * data:----[empty Data OR Undefiend]
            * onfullFIled[]
            * onRejection[]
            
        2) 
            * Web Broser / Node
            * Network Request 
            * [✅] [❌]
            
        * |> [✅]  => its go on onfullFIled[] & 404 error go on onfullFIled[]
        * |> [❌]  => its go on onRejection[]
    ```

*/