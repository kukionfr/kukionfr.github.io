<h2 align="center">
  Portfolio Website - v2.0<br/>
  <a href="https://kukionfr.github.io" target="_blank">kukionfr.github.io</a>
</h2>
<div align="center">
  <img alt="Demo" src="./src/Assets/Kyu_logo_transparent.png" />
</div>

<br/>

<center>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) &nbsp;


</center>

## Built With

My personal portfolio <a href="https://kukionfr.github.io" target="_blank">kukionfr.github.io</a> which features some of my github projects as well as my resume and technical skills.<br/>

This project was built using these technologies.

- React.js
- Node.js
- Express.js
- CSS3
- VsCode
- Vercel

## Features

**📖 Multi-Page Layout**

**🎨 Styled with React-Bootstrap and Css with easy to customize colors**

**📱 Fully Responsive**

To deploy add the following:
 "homepage": "https://[username].github.io" at the top of your package.json

 "predeploy": "npm run build",
  "deploy": "gh-pages -d build",  in scripts section
 
return (
      <Router basename={process.env.PUBLIC_URL}>
         ...
 in App.js

and then run the following in terminal
npm run deploy

Go to your github repository on github.com.
Go to settings>github pages> select gh-pages as your branch to deploy