import React from "react";

import styled from "styled-components";

const MenuWrapp = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
`;
const MenuItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const MenuLink = styled.a``;

const Menu = ({ setPath }) => {
  const menu = [
    { id: 1, name: "Главная", path: "/" },
    { id: 2, name: "Испольнитель", path: "/singer" },
    { id: 3, name: "Поиск", path: "/search" },
  ];

  return (
    <MenuWrapp>
      <MenuList>
        {menu.map((item) => (
          <MenuItem key={item.id}>
            <MenuLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPath(item.path);
              }}
            >
              {item.name}
            </MenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </MenuWrapp>
  );
};

export default Menu;
