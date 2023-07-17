import React from "react";
import { Typography, Link, Button } from "@mui/material";
import "../slider/slick.css";
import "../slider/slick-theme.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

function createData(title: string, date: string, link: string) {
  return { title, date, link };
}

const rows = [
  createData(
    "예술과 기술 R&D과정 최종 합격자 발표",
    "2023. 7. 17.",
    "/announcement"
  ),
  createData("예술과 기술 R&D과정 Q&A", "2023. 6. 25.", "/qna"),
  createData("2023 ODBY 예술 X 기술 R&D 과정 공고", "2023. 6. 19.", "/notice"),
];

const NoticeSection: React.FC = () => {
  const { t } = useTranslation(["page"]);
  const navigate = useNavigate();

  return (
    <div id="4" className="App-Notice-section" style={{ paddingBottom: 50 }}>
      <TableContainer
        style={{
          width: isMobile ? "80%" : "57%",
          backgroundColor: "transparent",
          padding: isMobile ? 0 : 150,
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "white" }}>
                <Typography variant="h4">{t("page:notice.index")}</Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                onClick={() => navigate(row.link)}
                key={row.title}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": {
                    backgroundColor: "darkgray",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell
                  style={{ color: "white" }}
                  component="th"
                  scope="row"
                >
                  {row.title}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  {row.date}
                </TableCell>
              </TableRow>
            ))}
            <TableRow />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NoticeSection;
