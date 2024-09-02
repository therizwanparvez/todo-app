"use client";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="text" name="" placeholder="Enter name" />
          <input type="email" name="" placeholder="Enter email" />
          <input type="password" name="" placeholder="Enter password" />
          <button type="submit">Register</button>

          <p>OR</p>
          <Link href="/login">Log In</Link>
        </form>
      </section>
    </div>
  );
};

// export const metadata = {
//   title: "Register",
//   description: "This is Register Page",
// };

export default Register;
