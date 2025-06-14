import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  cardTitle: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, cardTitle, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <h1>{title}</h1>
        <div className="card__content">
          <p className="card__title">{cardTitle}</p>
          <p className="card__description">{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 200px;
    background-color:rgb(40, 37, 37);
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5pxrgb (0, 0, 0);
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 7px solid #000;
    cursor: pointer;
  }

  .card h1 {
    
    fill: #333;
    text-align: center;
    display: flex;
    align-items: center;
    border-bottom: 2px solid red;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 1rem 2rem rgb(255, 0, 0);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 1rem;
    color: #000;
    line-height: 1.4;
  }
`;

export default Card;
