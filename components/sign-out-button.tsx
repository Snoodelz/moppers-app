import React from "react";

const SignOutButton: React.FC = ({ onSignOut }) => {
  return <button onClick={onSignOut}>Signout</button>;
};

export default SignOutButton;
