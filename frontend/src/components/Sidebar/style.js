import styled from "styled-components";
import { Block as B } from "../../pages/Home/style";

export const Container = styled(B)`
  background: var(--color-2);
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  left: 0;
  top: 0px;
  border-radius: var(--radius-1);
  padding: 0;
`;

export const Block = styled.div`
  padding: 15px;
`;

export const MenuBlock = styled(Block)`
  flex: 1;
`;

export const Image = styled.img`
  width: 120px;
  filter: invert(1) brightness(0);
  display: block;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0;

  li {
    margin-bottom: 10px;
    border-radius: 8px;
    &:hover {
      a {
        color: var(--color-4);
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    padding: 2px 8px;
    font-size: 15px;
    color: var(--color-5);
    text-decoration: none;
    transition: 0.2s;
    svg {
      width: 20px;
    }
  }
`;
