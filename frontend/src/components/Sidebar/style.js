import styled from "styled-components";

export const Container = styled.aside`
  background: #0d1017;
  border-right: 1px solid #333b4d99;
  width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Block = styled.div`
  padding: 12px;
  border-bottom: 1px solid #333b4d99;
`;

export const MenuBlock = styled(Block)`
  flex: 1;
`;

export const Image = styled.img`
  display: block;
  width: 120px;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 8px;
  margin: 0;

  li {
    margin-bottom: 5px;
    border-radius: 8px;
    &:hover {
      background: #47536b33;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 8px;

    color: #fff;
    text-decoration: none;
    opacity: 0.7;
    svg {
      width: 16px;
    }
  }
`;
