import React, { useEffect } from "react";
import { scopes } from "../utils/scope";
import useStore from "../zustand/useAppStore";
import { useNavigate } from "react-router";
function Login() {
  const token = useStore((state) => state.token);
  const navigate = useNavigate();
  const handleClick = () => {
    const redirectUrl = "https://spotify-woad-psi.vercel.app";
    const clientId = `2519e3e45f514f058835ac9e90f2cf92`;
    const apiUrl = "https://accounts.spotify.com/authorize";
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scopes=${scopes.join(
      ""
    )}&response_type=token&show_dialog=true`;
  };

  useEffect(() => {
    if (token) {
      navigate("spotify");
    } else {
      navigate("/");
    }
  }, token);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <button
        className="btn bg-green-500 rounded-md px-10 text-white text-lg"
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
