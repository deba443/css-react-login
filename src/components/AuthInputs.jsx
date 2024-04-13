export const AuthInputs = () => {
  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label>Email</label>
          <input onChange={() => console.log("hye")} type="email" />
        </p>
        <p>
          <label>Password</label>
          <input onChange={() => console.log("hye")} type="password" />
        </p>
      </div>
      <div className="actions">
        <button className="text-button">Create a new Account</button>
        <button className="button">Sign in</button>
      </div>
    </div>
  );
};
