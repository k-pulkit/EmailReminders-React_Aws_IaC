import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const MyNav = ({ hideSignout }) => {
  const { signOut } = useAuthenticator((context) => [context.user]);

  return (
    <div className="w-screen bg-primary">
      {useMemo(
        () => (
          <div className="max-container flex flex-row items-center justify-between gap-10 px-4 py-3 text-xl font-bold text-white">
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className="text-xl font-bold text-white">Email Reminders</p>
            </Link>
            <div className="flex flex-row items-center justify-center space-x-10 font-bold text-white">
              <Link
                to="/about"
                style={{ textDecoration: "none" }}
                className="max-md:hidden"
              >
                <p className="text-white hover:cursor-pointer hover:underline">
                  About
                </p>
              </Link>
              <div
                className={`border:blue-800 rounded-full border px-4 py-2 text-lg hover:cursor-pointer ${hideSignout ? "bg-transparent text-transparent" : "bg-green-600 text-white hover:bg-green-700"}`}
                onClick={signOut}
              >
                SignOut
              </div>
            </div>
          </div>
        ),
        [hideSignout],
      )}
    </div>
  );
};

export default MyNav;
