import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

function Banner() {
  const [sceneUrl, setSceneUrl] = useState(
    "https://prod.spline.design/FK2XzxGEZxswqErR/scene.splinecode"
  );
  return (
    <div className="mt-20">
      <Spline scene={sceneUrl} />
    </div>
  );
}

export default Banner;
