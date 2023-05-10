import React, { useEffect } from "react";

export const Download = () => {
  return (
    <a
      className="downloadZip"
      href="/banners.zip"
      target="_blank"
      rel="noopener noreferrer"
      download
    >
      Download
    </a>
  );
};
