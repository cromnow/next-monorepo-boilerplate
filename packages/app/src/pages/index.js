import React from "react";
import { Button } from "@arbete/ui";
import AuthProvider, { AuthConsumer } from "contexts/Auth";
import API from "api/protected";

export default function Index() {
  return (
    <>
      <AuthProvider>
        <p>Hello Next.js</p>
        <AuthConsumer>
          {({ login, logout, token }) => (
            <>
              {token}
              <Button onClick={login}>Login</Button>
              <Button onClick={logout}>Logout</Button>
              <Button
                onClick={() =>
                  API.get("/ping", {
                    headers: { Authorization: token },
                  }).then((resp) =>
                    console.log("protected api returned; ", resp)
                  )
                }
              >
                Call protected API
              </Button>
            </>
          )}
        </AuthConsumer>
      </AuthProvider>
    </>
  );
}
