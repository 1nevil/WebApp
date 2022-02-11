import React from "react";

export default function Error() {
  return (
    <div className="text-center mt-5 row">
      <div>
        <img src="./images/sad.png" alt="Sad image" srcset="" />
        <h1 className="mt-3">Error 404 :Page is note found </h1>
        <p>The requested url is not found on this server.</p>
        <p>That's all we know</p>
      </div>
    </div>
  );
}
