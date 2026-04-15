"use client";

import { Hourglass } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
}
