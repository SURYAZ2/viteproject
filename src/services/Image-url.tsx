import React from "react";
import noimage from "../assets/Noimages.png";

const getCroppedImageURL = (url: string) => {
  if (!url) return noimage;
  const index = url.indexOf("media/") + "media/".length;
  url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageURL;
