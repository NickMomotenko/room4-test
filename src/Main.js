import React from "react";

import styled from "styled-components";

const ItemWrapp = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f6dede;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const ItemText = styled.div`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const ItemLink = styled.a`
  margin-left: 20px;
`;

const ItemArtistName = styled.div`
  cursor: pointer;
  background-color: #f7f2f2;
  padding: 3px 5px;
  color: #c9a6a6;
`;

const ItemIcon = styled.img.attrs((props) => ({
  src: props.url,
}))`
  display: inline-block;

  height: 50px;
  width: 50px;
`;

const Item = (props) => {
  console.log(props);
  return (
    <ItemWrapp onClick={() => props.onClick(props.artist.name)}>
      <ItemIcon
        url={Object.values(props.image?.find((img) => img.size === "small"))[0]}
      />
      <ItemText>{props.name}</ItemText>
      <ItemArtistName>{props.artist.name}</ItemArtistName>
      <ItemLink href={props.url}>Link</ItemLink>
    </ItemWrapp>
  );
};

const MainWrapp = styled.div``;

const List = styled.ul``;

const Title = styled.div`
  font-weight: 500;
  margin-bottom: 30px;
`;

const Main = ({ topTracks, getInfo }) => {
  return (
    <MainWrapp>
      <Title>Топ треки</Title>
      <List>
        {topTracks.map((item, index) => (
          <Item key={index} onClick={getInfo} {...item} />
        ))}
      </List>
    </MainWrapp>
  );
};

export default Main;
