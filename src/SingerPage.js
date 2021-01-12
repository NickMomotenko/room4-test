import React from "react";

import styled from "styled-components";

const SingerPageWrapp = styled.div``;

const SingerName = styled.div`
  margin-bottom: 20px;
`;

const SingerTags = styled.ul`
  margin-bottom: 20px;
`;

const SingerTagsWrapp = styled.li`
  display: flex;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SingerDescription = styled.div``;

const SingerTagsItemName = styled.div`
  margin-right: 20px;
`;

const SingerTagsItemImg = styled.img.attrs((props) => ({
  src: props.url,
}))`
  display: inline-block;

  width: 100px;
  height: 100px;
`;

const SingerTagsItemUrl = styled.a``;

const SingerPage = ({ artist }) => {
  return (
    <SingerPageWrapp>
      {!artist ? (
        `Выбери артиста на Главной странице ;)`
      ) : (
        <>
          <SingerTagsItemImg
            url={
              Object.values(
                artist?.artist.image.find((img) => img.size === "small")
              )[0]
            }
          />
          <SingerName>{`Имя исполнителя: ${artist?.artist.name}`}</SingerName>
          <SingerTags>
            {`Теги:`}
            {artist?.artist.tags.tag.map((tag) => (
              <SingerTagsWrapp key={`${tag.name}/${tag.url}`}>
                <SingerTagsItemName>{tag.name}</SingerTagsItemName>
                <SingerTagsItemUrl href={tag.url}>Link</SingerTagsItemUrl>
              </SingerTagsWrapp>
            ))}
          </SingerTags>
          <SingerDescription>{`Описание: ${artist?.artist.bio.summary}`}</SingerDescription>
        </>
      )}
    </SingerPageWrapp>
  );
};

export default SingerPage;
