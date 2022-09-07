import styled from 'styled-components';

export const LinkList = styled.ul`
  list-style: none;

  & a {
    color: black;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

export const StyledThumbnail = styled.img`
  width: 40%;
  height: auto;
  margin: 10px 0;
`;

export const PageContent = styled.div`
  padding: 10px;
  box-sizing: border-box;
  margin: 0 auto;
  width: 80%;
  min-height: calc(100vh - 80px);
  background-color: rgba(255, 228, 84, 0.5);
  & a {
    color: black;
  }
`;

export const ContainerPageContent = styled.div`
  margin: 0 auto;
  width: 80%;
  min-height: calc(100vh - 80px);
  background-color: rgba(255, 228, 84, 0.5);
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  & form fieldset {
    margin: 10px;
  }
`;

export const TextDivMainPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  background-image: url('https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/04/marvel-ultimatum.jpg');
  background-size: 100vw auto;
  margin: auto;
  color: white;
  text-align: center;
`;
