import React from "react";
import styled from "styled-components";

export default function Clips() {
  return (
    <ClipsContainer>
      <ClipsLeft>
        <ClipCenter>
          <video
            src="https://i.giphy.com/media/gPTrX00jccTebDMFPm/giphy480p.mp4"
            autoPlay
            loop
            muted
          />
          <h3>Free falling</h3>
        </ClipCenter>
      </ClipsLeft>
      <ClipsRight>
        <div className="item">
          <video
            src="https://i.giphy.com/media/gPTrX00jccTebDMFPm/giphy480p.mp4"
            autoPlay
            loop
            muted
          />
          <h3>Free falling</h3>
        </div>
        <div className="item">
          <video
            src="https://i.giphy.com/media/gPTrX00jccTebDMFPm/giphy480p.mp4"
            autoPlay
            loop
            muted
          />
          <h3>Free falling</h3>
        </div>
      </ClipsRight>
    </ClipsContainer>
  );
}

const ClipsContainer = styled.div`
  display: flex;
`;

const ClipsLeft = styled.div`
  flex: 0.7;
`;

const ClipsRight = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;

  .item {
    video {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;

const ClipCenter = styled.div`
  video {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
