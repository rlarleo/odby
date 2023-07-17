import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { isMobile } from "react-device-detect";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

const AnnouncementPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // 컴포넌트가 마운트될 때 페이지의 제일 위로 스크롤 이동
  }, []);

  const images = ["/images/announcement.jpeg"];

  return (
    <div className="App-announcement">
      <Stack
        sx={{
          marginX: isMobile ? 0 : 30,
          paddingY: isMobile ? 5 : 10,
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <Stack
          onClick={() => navigate(`/`)}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            "&:hover": {
              backgroundColor: "darkgray",
              cursor: "pointer",
            },
          }}
          paddingX={2}
        >
          <ArrowBackIosNewIcon />
        </Stack>
        <div>
          {images.map((src, index) => (
            <div style={{ paddingBottom: 40 }}>
              <img
                style={{
                  width: isMobile ? "80vw" : "45vw",
                  margin: "0 10vw 0 10vw",
                }}
                key={index}
                src={`${process.env.PUBLIC_URL}${src}`}
                alt={`images/00${index + 1}`}
              />
            </div>
          ))}
        </div>
      </Stack>
    </div>
  );
};

export default AnnouncementPage;
