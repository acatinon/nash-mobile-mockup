import React from 'react';
import Svg, {
  G,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  Mask,
} from 'react-native-svg';

export default function NashBackground(props) {
  return (
    <Svg fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
        <Rect y="0.00390625" rx="8" ry="8" width="100%" height="100%" fill="white" />
      </Mask>
      <G mask="url(#mask0)">
        <Rect x="0.217438" y="0.00341797" width="100%" height="100%" fill="#0052F3" />
        {/* pink blob */}
        <Svg viewBox="0 0 1440 289" preserveAspectRatio="xMinYMin">
          <G transform="scale(1.5, 1.5)">
            <Path opacity="0.9" d="M-255.025 57.6215C-257.591 166.659 40.5898 228.927 110.763 29.3558C180.937 -170.215 -46.1415 -302.962 -67.9084 -177.793C-101.857 17.4218 -252.46 -51.4157 -255.025 57.6215Z" fill="url(#paint1_linear)" />
          </G>
        </Svg>

        {/* cyan blob */}
        <Svg viewBox="0 0 1440 289" preserveAspectRatio="xMaxYMax">
          <G transform="scale(1.2, 1.2) translate(-270 -30)">
            <Path d="M1548.75 -87.7808C1425.85 -55.0201 1547.7 96.342 1336.19 188.173C1200.58 247.053 1417.13 467.346 1623.04 333.38C1828.95 199.414 1671.65 -120.542 1548.75 -87.7808Z" fill="url(#paint0_linear)" />
          </G>
        </Svg>

        {/* top right transparent blob */}
        <Svg viewBox="0 0 1440 289" preserveAspectRatio="xMaxYMin">
          <G transform="scale(1.2, 1.2) translate(-400 0)">
            <Path opacity="0.15" d="M1298.1 101.032C1216.97 115.587 1247.22 -6.99192 1097.94 -2.79959C1002.22 -0.11153 1069.28 -189.308 1226.77 -167.174C1384.27 -145.04 1379.22 86.477 1298.1 101.032Z" fill="#F2F6FF" />
          </G>
        </Svg>

        {/* bottom left transparent blob */}
        <Svg viewBox="0 0 1440 289" preserveAspectRatio="xMinYMax">
          <G transform="scale(1, 1) translate(100 -0)">
            <Path opacity="0.1" d="M70.3112 228.764C-42.541 214.212 -139.665 516.8 59.7487 611.372C259.162 705.945 421.657 484.815 294.161 448.58C95.3173 392.069 183.163 243.317 70.3112 228.764Z" fill="#F2F6FF" />
          </G>
        </Svg>
      </G>
      <Defs>
        <LinearGradient id="paint0_linear" x1="1812.37" y1="110.688" x2="1502.15" y2="431.924" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#270AFF" />
          <Stop offset="1" stop-color="#02E4CE" />
        </LinearGradient>
        <LinearGradient id="paint1_linear" x1="-372.831" y1="99.5858" x2="-351.169" y2="-223.186" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#FE46B9" />
          <Stop offset="0.0101009" stop-color="#F752CD" />
          <Stop offset="1" stop-color="#825BFA" />
        </LinearGradient>
      </Defs>
    </Svg>

  );
};
