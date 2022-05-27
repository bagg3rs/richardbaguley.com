import React from 'react';
import { css } from '@emotion/react';
import { SocialIcon } from 'react-social-icons';
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
      <p>Here are my GitHub stats:</p>
      <img align="center" src="https://github-readme-stats.vercel.app/api?username=bagg3rs&count_private=true&show_icons=true&hide_title=true&hide=issues" />
      <p> 
        <SocialIcon url="https://uk.linkedin.com/in/rbaguley" /> <SocialIcon url="https://github.com/bagg3rs" />
      </p>
    </div>
  );
};

export default HomePage;
