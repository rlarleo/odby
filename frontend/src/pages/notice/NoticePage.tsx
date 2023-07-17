import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Stack } from "@mui/material";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

const StyledAnnouncement = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.5;

  h2,
  h3 {
    color: #bababa;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

const NoticePage = () => {
  const downloadUrl1 = `${process.env.PUBLIC_URL}/application/2023_ODBY_R&D과정_지원신청서_(신청자명).docx`;
  const downloadUrl2 = `${process.env.PUBLIC_URL}/application/2023_ODBY_R&D과정_지원신청서_(신청자명).hwp`;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // 컴포넌트가 마운트될 때 페이지의 제일 위로 스크롤 이동
  }, []);
  console.log(downloadUrl1);

  return (
    <div className="App-notice">
      <StyledAnnouncement>
        <Stack
          sx={{
            marginX: isMobile ? 0 : 30,
            paddingY: isMobile ? 5 : 10,
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
          <Stack sx={{ alignItems: "center" }}>
            <img
              style={{ width: isMobile ? "80vw" : "50vw", paddingBottom: 30 }}
              key="key"
              src={`${process.env.PUBLIC_URL}/images/notice.jpeg`}
              alt={`imagea`}
            />
          </Stack>
          <Stack sx={{ paddingX: isMobile ? 2 : 20 }}>
            <h2>공모내용</h2>
            <p>
              ‘한국예술종합학교 – 예컨대 프로젝트’의 일환으로 ODBY의 R&D과정
              인원을 모집합니다.
            </p>
            <p>
              예술과 기술 융합을 통한 사업 방향성과 예술 활동을 연구하는
              과정입니다.
            </p>
            <p>
              다양한 아이디어를 가지고 프로젝트 구체화 연구 과정을 진행할
              지원자분들을 기다립니다.
            </p>

            <h3>사업 활동 예시</h3>
            <ul>
              <li>예술교육 앱 개발 연구</li>
              <li>인터렉티브 홍보물 시제품 연구</li>
              <li>AR 공연 연출 연구 등</li>
            </ul>

            <h3>활동 내용</h3>
            <p>예술과 기술 융합 사업화, 예술 활동 연구</p>
            <p>7월 19일 OT를 포함 총 7회차의 R&amp;D 연구 과정 진행</p>
            <p>예컨대 프로젝트 중간평가 준비</p>

            <h3>모집인원</h3>
            <p>3명(팀)</p>

            <h3>지원내용</h3>
            <ul>
              <li>연구비 지원 1백만 원(세전)</li>
              <li>기술 PD 컨설턴트 진행</li>
              <li>
                R&amp;D 마지막 과정 중간평가를 통해 선정된 프로젝트는 이후 본
                프로젝트의 구체화 과정에 대한 예산을 지원받을 수
                있습니다.(중간평가 선정 예산안 1천만 원)
              </li>
            </ul>

            <h3>접수기간</h3>
            <p>2023년 6월 19일(월) ~ 7월 7일(금) 24:00까지</p>

            <h3>접수자료</h3>
            <ul>
              <li>지원신청서 – (PDF제출시 한글 및 워드 함께 제출)</li>
              <li>개인정보 수집동의서(별첨 1)</li>
              <li>첨부파일 – 개인, 단체 포트폴리오 및 추가자료(해당시)</li>
            </ul>
            <p>
              지원신청서 제목: 2023_ODBY_R&amp;D과정_지원신청서_(개인/단체명)
            </p>
            <p>접수방법 : 이메일 접수 (odby.art@gmail.com)</p>
            <p>문의 : 010.2351.9954 odby.art@gmail.com</p>
            <p>지원서 다운로드</p>
            <Stack direction="row" spacing={2}>
              <Button
                component="a"
                href={downloadUrl1}
                download
                variant="contained"
                color="info"
                sx={{ textTransform: "none" }}
              >
                지원신청서.docx
              </Button>
              <Button
                component="a"
                href={downloadUrl2}
                download
                variant="contained"
                color="success"
                sx={{ textTransform: "none" }}
              >
                지원신청서.hwp
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </StyledAnnouncement>
    </div>
  );
};

export default NoticePage;
