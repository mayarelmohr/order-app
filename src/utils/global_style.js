import React from 'react';
import { Global, css } from '@emotion/core';

/**
 * Global style for whole app
 */
export const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'ProximaNova';
        src: url('../fonts/ProximaNova-Regular.otf')});
        src:
          url('../fonts/ProximaNova-Regular.woff') format('woff'),
          url('../fonts/ProximaNova-Regular.ttf')}) format('truetype'),
          url('../fonts/ProximaNova-Regular.woff2')}) format('woff2'),
        font-style: normal;
        font-weight: 300;
        font-display: fallback;
      }
      @font-face {
        font-family: 'ProximaNova';
        src: url('../fonts/ProximaNova-Semibold.otf')});
        src:
          url('../fonts/ProximaNova-Semibold.woff') format('woff'),
          url('../fonts/ProximaNova-Semibold.ttf')}) format('truetype'),
          url('../fonts/ProximaNova-Semibold.woff2')}) format('woff2'),
        font-style: normal;
        font-weight: 400;
        font-display: fallback;
      }

      html {
        box-sizing: border-box;
      }
      *,
      ::before,
      ::after {
        box-sizing: inherit;
      }
      html,
      body {
        scroll-behavior: smooth;
        padding: 0;
        margin: 0;
      }
      body {
        font-family: 'ProximaNova-Regular', 'ProximaNova-Semibold';
        font-weight: 300;
        font-size: 17px;
        color: #6A7A90;
      }
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      img {
        width: 100%;
      }
      button {
        padding: 0;
        border: none;
        font-family: inherit;
      }
      .subtitle {
        letter-spacing: 3px;
        font-size: 18px;
        color: #2F4662;
        font-family: 'ProximaNova-Semibold';
        margin-top: 0;
      }

      `}
  />
);

export default GlobalStyles;
