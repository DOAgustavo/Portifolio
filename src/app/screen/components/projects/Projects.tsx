"use client";

import React from 'react';
import StyledWrapper from './estiloProjects';

const Projects = () => {
  return (
    <StyledWrapper>
      <div className="body">
        <h2 className="section-title">Projetos</h2>
        <div className="cards-container">
          <div className="card">
            <div className="card__content">
              <p className="card__title">Card Title 1</p>
              <p className="card__description">
                Descrição do projeto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <p className="card__title">Card Title 2</p>
              <p className="card__description">
                descriação do projeto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <p className="card__title">Card Title 3</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Projects;