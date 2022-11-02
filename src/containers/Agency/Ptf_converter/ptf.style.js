import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
    .button-pdf{
        border-radius: 4px;
        background-image: linear-gradient(to right,#4ba1d8,#4464bd 95%);
        font-weight: 500;
        text-transform: inherit;
        padding-left: 13px;
        padding-right: 13px;
        min-height: 42px;
        border:0px;
        margin-right:10px;
        
    }
    .button-pdf:hover {
        box-shadow: rgba(75, 109, 235, 0.78) 0px 12px 24px -10px;
      }
      @media only screen and (max-width: 991px) {
        display: none;
      }
    .btn-text{
        padding-left: 5px;
        padding-right: 5px;
        cursor: pointer;
        color: #ffffff;
        font-family: inherit;
        font-size: 16px;
    }
`;

export default FeatureSectionWrapper;