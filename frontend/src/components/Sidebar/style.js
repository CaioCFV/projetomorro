import styled from "styled-components";
import { Block as B } from "../../pages/Home/style";

export const Container = styled(B)`
  background: var(--color-2);
  width: 250px;
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

export const UserInfo = styled.div`
  background: var(--color-1);
  border-radius: 8px;
  width: calc(100% - 30px);
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  box-sizing: border-box;

  p {
    font-size: 15px;
    text-transform: capitalize;
    color: var(--color-4);
    font-weight: 700;
  }

  small {
    font-size: 12px;
    text-transform: lowercase;
    color: var(--color-5);
    margin-top: 5px;
    display: block;
  }

  button {
    border: 0;
    padding: 0;
    margin-top: 5px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
  }

  i {
    min-width: 35px;
    height: 70px;
    border-radius: 15px 0 0 15px;
    display: block;
    box-shadow: var(--shadow-1);
    display: flex;
    align-center: center;
    justify-content: center;
    font-size: 25px;
    background: var(--color-4);
    color: #fff;
    line-height: 60px;
    margin-right: 15px;
  }
`;
