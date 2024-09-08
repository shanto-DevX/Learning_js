/* const Conditional_randaring = () => {
  const state = true;

  if (state == true) {
    return (
      <div>
        <h1>Login Status</h1>
        <button>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Logout Status</h1>
        <button>Login</button>
      </div>
    );
  }
}; */

/* 
* If...else Statament
const logInStatus = (status) => {
  if (status) {
    return <button>Logout Button</button>;
  } else {
    return <button>Login Button</button>;
  }
};

const Conditional_randaring = () => {
  return (
    <div>
      <h1>Login Status</h1>
      {logInStatus(false)}
    </div>
  );
}; */

// * => Switch Case
/* const Conditional_randaring = () => {
  const status = false;

  switch (status) {
    case true:
      return (
        <>
          <h1>Login Status</h1>
          <button>Logout</button>
        </>
      );
    case false:
      return (
        <>
          <h1>Login Status</h1>
          <button>Login</button>
        </>
      );
    default:
      return null;
  }
};

export default Conditional_randaring; */

// * => Ternary Case
/* const Conditional_randaring = () => {
  let status = false;

  return (
    <div>
      <h1>Login Status</h1>
      {status ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
};

export default Conditional_randaring; */

/* // * => Logical &&
const Conditional_randaring = () => {
  let status = false;

  return (
    <div>
      <h1>Login Status</h1>
      {(status && <button>Logout</button>) || <button>Login</button>}
    </div>
  );
}; 

export default Conditional_randaring;
*/

// * => IIF
const Conditional_randaring = () => {
  let status = true;

  return (
    <div>
      <h1>Login Status</h1>
      {(() => {
        if (status == true) {
          return <button>Logout</button>;
        } else {
          return <button>Login</button>;
        }
      })()}
    </div>
  );
};

export default Conditional_randaring;
