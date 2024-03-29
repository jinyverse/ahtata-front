import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: "esamanruBold";
	src: url("./assets/fonts/esamanruBold.ttf");
}

@font-face {
  font-family: 'esamanru';
  src: url('./assets/fonts/esamanruMedium.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'esamanruLight';
  src: url('./assets/fonts/esamanruLight.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'SpoqaHanSansNeoBold';
  src: url('./assets/fonts/SpoqaHanSansNeoBold.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'SpoqaHanSansNeoLight';
  src: url('./assets/fonts/SpoqaHanSansNeoLight.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'SpoqaHanSansNeoMedium';
  src: url('./assets/fonts/SpoqaHanSansNeoMedium.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'SpoqaHanSansNeoRegular';
  src: url('./assets/fonts/SpoqaHanSansNeoRegular.ttf');
  font-weight: normal;
  font-style: normal;
}


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
* {
  box-sizing: border-box;
}
body {
  font-family: "esamanru";
  transition: all 0.4s ease-in-out;
}
a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
