import styled from "styled-components";
const StyledWrapper = styled.div`



  .section-title {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  
  }

  .cards-container {
    display: flex;
    
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap; 
    padding: 20px;
  }

  .card {
    position: relative;
    width: 350px;
    height: 250px;
    background-image: url('images/foto.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 2px #f5434f;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(139, 7, 7, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.8);
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
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }
`;
export default StyledWrapper;
