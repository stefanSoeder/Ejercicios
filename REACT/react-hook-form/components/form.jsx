import { useForm } from "react-hook-form";


const AuthForm = () => {
    const { handleSubmit, register } = useForm();
    const onFormSubmit = () => {};
  
    return (
      <form onSubmit={onFormSubmit}>
        <label htmlFor="username">
          <span>Username:</span>
          <input
            id="username"
            name="username"
            placeholder="MiniCoder"
            type="text"
          />
        </label>
  
        <label htmlFor="password">
          <span>Password:</span>
          <input
            id="password"
            name="password"
            placeholder="*****"
            type="password"
          />
        </label>
  
        <button type="submit">Submit</button>
      </form>
    );
  };