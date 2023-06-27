# ES6 Promises

 Promise is an object that represents a value that may not be available yet. It can be in one of three states:

* Pending: The initial state, the Promise is waiting for the result of the operation.
* Fulfilled: The operation completed successfully and the Promise has a value.
* Rejected: The operation failed and the Promise has a reason for the failure.

Promises have a then() method, which is called when the operation completes successfully. 
If the operation fails, the catch() method is called. You can chain multiple then() methods together to handle different steps in the operation.

```
josephgreen@JosephGreen-Mugabi:~/alx-backend-javascript_s$ cat 0x01-ES6_promise/9-main.js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));

josephgreen@JosephGreen-Mugabi:~/alx-backend-javascript_s$ 
```

```
josephgreen@JosephGreen-Mugabi:~/alx-backend-javascript_s$ npm run dev 0x01-ES6_promise/9-main.js

> @ dev /home/josephgreen/alx-backend-javascript_s
> npx babel-node "0x01-ES6_promise/9-main.js"

[ 5, 'Guardrail was processed' ]
[ 'Error: cannot divide by 0', 'Guardrail was processed' ]
josephgreen@JosephGreen-Mugabi:~/alx-backend-javascript_s$ 
```
