import styled, { createGlobalStyle } from "styled-components";

export const Block = styled.div`
  background: var(--color-2);
  border-radius: var(--radius-1);
  border-radius: var(--radius-1);
  box-shadow: var(--shadow-1);
  padding: 25px;
  box-sizing: border-box;
`;

export const Dashboard = styled.div`
  display: flex;
  gap: 30px;
  background: var(--color-1);
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;
`;

export const Content = styled(Block)`
  flex: 1;
`;

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      font-family: "Inter", sans-serif;
      font-optical-sizing: auto;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    :root {
      --color-1: #e3e8ed;
      --color-2: #fff;
      --color-3: #e3e7e7;
      --color-4: #393b4d;
      --color-5: #9ea0a8;
      --color-6: #e52e00;
      --radius-1: 10px;
      --shadow-1: #00000024 0 0 10px;
    }
`;
