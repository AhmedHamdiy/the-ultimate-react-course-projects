import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo.svg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
