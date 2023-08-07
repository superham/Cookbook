import {
  Card,
  Container,
  Chip,
  Stack,
  Grid,
  Paper,
  Typography,
  createSvgIcon,
} from "@mui/material";
import { useState } from "react";
import { useFilters } from "../../use/useFilters/useFilters";
import { SvgIcon, Icon } from "@mui/material";
// import { makeStyles } from "@mui/styles";

const italyFlag = (
  <SvgIcon sx={{ display: "flex" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z" />
        <path fill="#6da544" d="M0 0h167v512H0z" />
        <path fill="#d80027" d="M345 0h167v512H345z" />
      </g>
    </svg>
  </SvgIcon>
);

const mexicanFlag = (
  <SvgIcon sx={{ display: "flex" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#eee" d="M144 0h223l33 256-33 256H144l-32-256z" />
        <path fill="#496e2d" d="M0 0h144v512H0z" />
        <path fill="#d80027" d="M368 0h144v512H368z" />
        <path fill="#ffda44" d="M256 277v10h12l10-22z" />
        <path
          fill="#496e2d"
          d="M160 242a96 96 0 0 0 192 0h-11a85 85 0 0 1-170 0zm39 17-4 2c-2 2-2 6 1 8 15 14 34 22 54 24v17h12v-17c20-2 39-10 54-24 3-2 3-6 1-8s-6-2-8 0a78 78 0 0 1-53 21c-19 0-38-8-53-21z"
        />
        <path
          fill="#338af3"
          d="M256 316c-14 0-28-5-40-13l6-9c20 13 48 13 68 0l7 9c-12 8-26 13-41 13z"
        />
        <path
          fill="#751a46"
          d="M256 174c22 11 12 33 11 34l-2-4c-5-11-18-18-31-18v11c6 0 11 5 11 11-7 7-9 17-4 26l4 8-13 23 29-7 18 18v-11l11 11 23-11-35-21-5-21 28 16c4 11 12 21 23 26 9-83-42-91-61-91z"
        />
        <path
          fill="#6da544"
          d="M222 271c-15 0-33-12-38-40l11-2c4 23 18 31 27 31 3 0 5-1 6-3 0-2 0-3-6-5-3-1-7-2-10-5-10-12 4-24 11-30 1-1 2-2 1-3 0 0-2-2-5-2-7 0-12-4-14-11-2-6 2-13 8-17l5 11c-2 0-2 2-2 4 0 0 1 2 3 2 7 0 14 4 16 9 1 3 2 9-5 15-7 7-11 12-9 15l5 1c5 2 14 5 13 17-1 8-8 13-17 13h-1z"
        />
        <path fill="#ffda44" d="m234 186-12 11v11l18-9c3-1 3-5 1-7z" />
        <circle cx="172" cy="275" r="8" fill="#ffda44" />
        <circle cx="189" cy="302" r="8" fill="#ffda44" />
        <circle cx="216" cy="323" r="8" fill="#ffda44" />
        <circle cx="297" cy="323" r="8" fill="#ffda44" />
        <circle cx="324" cy="302" r="8" fill="#ffda44" />
        <circle cx="341" cy="275" r="8" fill="#ffda44" />
        <rect
          width="34"
          height="22"
          x="239"
          y="299"
          fill="#ff9811"
          rx="11"
          ry="11"
        />
      </g>
    </svg>
  </SvgIcon>
);

const usFlag = (
  <SvgIcon sx={{ display: "flex" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#eee"
          d="M256 0h256v64l-32 32 32 32v64l-32 32 32 32v64l-32 32 32 32v64l-256 32L0 448v-64l32-32-32-32v-64z"
        />
        <path
          fill="#d80027"
          d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"
        />
        <path fill="#0052b4" d="M0 0h256v256H0Z" />
        <path
          fill="#eee"
          d="m187 243 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67zm162-81 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Zm162-82 57-41h-70l57 41-22-67Zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Z"
        />
      </g>
    </svg>
  </SvgIcon>
);

const germanFlag = (
  <SvgIcon sx={{ display: "flex" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#ffda44" d="m0 345 256.7-25.5L512 345v167H0z" />
        <path fill="#d80027" d="m0 167 255-23 257 23v178H0z" />
        <path fill="#333" d="M0 0h512v167H0z" />
      </g>
    </svg>
  </SvgIcon>
);

const chineseFlag = (
  <SvgIcon sx={{ display: "flex" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#d80027" d="M0 0h512v512H0z" />
        <path
          fill="#ffda44"
          d="m140.1 155.8 22.1 68h71.5l-57.8 42.1 22.1 68-57.9-42-57.9 42 22.2-68-57.9-42.1H118zm163.4 240.7-16.9-20.8-25 9.7 14.5-22.5-16.9-20.9 25.9 6.9 14.6-22.5 1.4 26.8 26 6.9-25.1 9.6zm33.6-61 8-25.6-21.9-15.5 26.8-.4 7.9-25.6 8.7 25.4 26.8-.3-21.5 16 8.6 25.4-21.9-15.5zm45.3-147.6L370.6 212l19.2 18.7-26.5-3.8-11.8 24-4.6-26.4-26.6-3.8 23.8-12.5-4.6-26.5 19.2 18.7zm-78.2-73-2 26.7 24.9 10.1-26.1 6.4-1.9 26.8-14.1-22.8-26.1 6.4 17.3-20.5-14.2-22.7 24.9 10.1z"
        />
      </g>
    </svg>
  </SvgIcon>
);

const indiaFlag = (
  <SvgIcon sx={{ display: "flex" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352z" />
        <path fill="#ff9811" d="M0 0h512v160H0Z" />
        <path fill="#6da544" d="M0 352h512v160H0Z" />
        <circle cx="256" cy="256" r="72" fill="#0052b4" />
        <circle cx="256" cy="256" r="48" fill="#eee" />
        <circle cx="256" cy="256" r="24" fill="#0052b4" />
      </g>
    </svg>
  </SvgIcon>
);

export { italyFlag, mexicanFlag, usFlag, germanFlag, chineseFlag, indiaFlag };
