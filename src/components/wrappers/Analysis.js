import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  height: 100%;
  ::-webkit-scrollbar {
    width: 0;
  }

  .container {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 1rem 2rem;
  }

  .container h3 {
    text-align: center;
    margin: 1rem 0;
  }
  .container.yourAnalysis {
    background-color: #00626282;
  }
  /* .container.generalAnalysis {
    background: linear-gradient(to bottom, #c3cfe2, #c3cfe6);
  } */
  .user_analysis,
  .general_analysis {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
  }
  .award_card {
    background-color: #ffe000;
    border-radius: 6px;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
  .status {
    font-weight: 600;
    font-size: 1.3rem;
  }

  .leaders_card {
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding: 20px;
  }
  .leaders_card .position {
    font-size: 2rem;
    font-style: italic;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 600;
  }

  .leaders_card .details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .leader_details {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .leader_details .head {
    font-size: 0.8rem;
    font-weight: 600;
  }

  .leader_name {
    font-family: cursive;
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    .leader_details {
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .leader_details {
      flex-wrap: wrap;
      gap: 0.4rem;
    }
  }
`;
