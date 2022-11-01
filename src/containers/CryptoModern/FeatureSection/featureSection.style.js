import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  .row{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    font-family: "DM Sans", sans-serif;
  }
  .col{
    margin-bottom:50px;
    width:350px;
  }
  .col_top{
    margin-bottom:50px;
    width:450px;
    height: 300px;
    box-shadow: 0px 0px 20px 0px #888;
    border-radius: 10px;
    background-color: #0f0344;
  }
  container{
   justify-content:center;
    display:flex;
  }
  .Title{
    line-height: 1.5;
    font-weight: 700;
    margin-top: 0px;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
    font-family: "DM Sans", sans-serif;
    font-size: 30px;
  }
  padding: 80px 0 180px 0;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }
  .sectionHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .feature__block {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    padding: 0 20px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-image: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(255, 255, 255, 0.031)
      );
    }
    @media (max-width: 500px) {
      padding: 15px 0;
      &:hover {
        background-image: none;
      }
    }
  }
`;

export default FeatureSectionWrapper;