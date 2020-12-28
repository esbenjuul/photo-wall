import Input from "../forms/Input";
import useGlobalStore from "../../store/global";
import shallow from "zustand/shallow";

const LoginPromt = () => {
  const [authenticate] = useGlobalStore(
    (state) => [state.authenticate],
    shallow
  );
  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(
      event.target.elements.username.value,
      event.target.elements.password.value
    );
  };
  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <fieldset>
          <Input label="Username" type="text" name="username" />
          <Input label="password" type="password" name="password" />
        </fieldset>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPromt;
