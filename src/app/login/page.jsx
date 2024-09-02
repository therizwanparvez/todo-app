"use client";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="email" name="" placeholder="Enter email" />
          <input type="password" name="" placeholder="Enter password" />
          <button type="submit">Login</button>

          <p>OR</p>
          <Link href="/register">New User</Link>
        </form>
      </section>
    </div>
  );
};

// export const metadata = {
//   title: "Login",
//   description: "This is Login Page",
// };

export default Login;
