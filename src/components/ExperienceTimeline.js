import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import BiotechIcon from "@mui/icons-material/Biotech";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from "@mui/icons-material/Work";

const ExperienceTimeline = () => {
  return (
    <div class="pt-48 font-poppins">
      <div class="text-xl text-center font-bold font-poppins pb-8">
        My Roadmap
      </div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
            fontFamily="poppins"
          >
            Current
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              color="primary"
              variant="outlined"
              fontFamily="poppins"
              style={{ color: "#1976d2" }}
            >
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" fontFamily="poppins">
              Uber Intern 🚗
            </Typography>
            <Typography fontFamily="poppins">Earner Movement Team</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
            fontFamily="poppins"
          >
            Jan 2023 - Current
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              color="primary"
              variant="outlined"
              style={{ color: "#1976d2" }}
            >
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" fontFamily="poppins">
              Hack4Impact Product Manager 🎨
            </Typography>
            <Typography fontFamily="poppins">
              ClearPathNYC - Resource Map For Houseless Youth
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
            fontFamily="poppins"
          >
            Aug 2022 - Dec 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" fontFamily="poppins">
              Hack4Impact Developer 💻
            </Typography>
            <Typography fontFamily="poppins">
              Brink - Accessible Voting Platform
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
            fontFamily="poppins"
          >
            Summer 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" fontFamily="poppins">
              Liberty Mutual Insurance Intern 💼
            </Typography>
            <Typography fontFamily="poppins">
              Small Business Insurance Team
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
            fontFamily="poppins"
          >
            August 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" fontFamily="poppins">
              UIUC 🎒
            </Typography>
            <Typography fontFamily="poppins">ILL! 📢</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            fontFamily="poppins"
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            May 2020 - Aug 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <BiotechIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" fontFamily="poppins">
              Northwestern University 🔬
            </Typography>
            <Typography fontFamily="poppins">
              Machine Learning Research
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default ExperienceTimeline;