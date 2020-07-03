import React from "react";
import VideoThumbnail from "./video-thumbnail";

export function ThumbContainer() {
  return (
    <div className="thumb-container">
      <VideoThumbnail
        imageUrl="https://i.ytimg.com/an_webp/mYoYbxWcmIs/mqdefault_6s.webp?du=3000&sqp=CPGR9fcF&rs=AOn4CLCebplygYn8duf4xmJ78jBx4ptpWg"
        title="Mira mi video 1"
      />
      <VideoThumbnail
        imageUrl="https://i.ytimg.com/an_webp/8LEIurTR_gs/mqdefault_6s.webp?du=3000&sqp=CIuS9fcF&rs=AOn4CLCmLL58sX4XCSeJJheHROmkqwJ9eQ"
        title="Mira mi video 2"
      />
      <VideoThumbnail
        imageUrl="https://i.ytimg.com/an_webp/5p17JmNW-pk/mqdefault_6s.webp?du=3000&sqp=CJGL9fcF&rs=AOn4CLBuQAMaAMQYD88njgsPDXN8rNvCxA"
        title="Mira mi video 3"
      />
    </div>
  );
}
