import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="content-footer">
      <div className="icon-footer" name="contato">
        <a className="link-footer" target="_blank" href="https://github.com/Doug77" rel="noreferrer">
          <img
            src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="github-icon"
            width="30px"
          />
          <span className="text-footer">
            GitHub
          </span>
        </a>
        <a className="link-footer" target="_blank" href="https://www.linkedin.com/in/douglas-d-oliveira/" rel="noreferrer">
          <img 
            src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin-icon"
            width="30px"
          />
          <span className="text-footer">
            LinkedIn
          </span>
        </a>
      </div>
      <div className="name-footer">
        Desenvolvido por Douglas Oliveira
      </div>
    </footer>
  );
}
