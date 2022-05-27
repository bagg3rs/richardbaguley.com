import React from 'react';
import { css } from '@emotion/react';

const HomePageStyle = css`
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }
`;

const HomePage = () => {
  return (
    <div css={[HomePageStyle]}>
      <h1 className="title">richardbaguley.com</h1>
      <p>This is Richard Baguley's 🏠 🔨 📝.</p>
      <p> </p>
      <img align="center" src="https://github-readme-stats.vercel.app/api?username=bagg3rs&count_private=true&show_icons=true&hide_title=true&hide=issues" />
        <br />
    </div>
  );
};

export default HomePage;
