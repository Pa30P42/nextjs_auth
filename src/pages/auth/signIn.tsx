import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SignIn() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignInGithub = () => {
    signIn("github");
  };

  const handleSignInCreds = async (event: FormEvent) => {
    event.preventDefault();
    const res = await signIn("credentials", { ...formValues, redirect: false });

    console.log("res", res?.error);
    if (res?.error) {
      setError(res.error);
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold">Sign In Page</h1>

      <div className="py-4">
        <h2 className="text-2xl mb-4">Sign In with Github</h2>
        <button
          onClick={handleSignInGithub}
          className="py-2 px-4 bg-slate-500 rounded-xl"
        >
          Sign In
        </button>
      </div>
      <div className="w-full h-px bg-gray-500" />
      <div>
        <h2>Credentials</h2>
        <form onSubmit={handleSignInCreds} className="bg-white">
          {error && (
            <p className="capitalize text-lg text-red-600 font-semibold my-4">
              {error}
            </p>
          )}
          <div className="mb-4">
            <label className="block" htmlFor="email">
              Enter your email
            </label>
            <input
              onChange={handleChange}
              className="py-2 px-4 rounded-md border-2 border-solid border-gray-400"
              type="text"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="password">
              Enter your password
            </label>
            <input
              onChange={handleChange}
              className="py-2 px-4 rounded-md border-2 border-solid border-gray-400"
              type="password"
              name="password"
            />
          </div>

          <button type="submit" className="py-2 px-4 bg-violet-500 rounded-xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
