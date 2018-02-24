// @flow
import React from 'react';
import styled from 'styled-components/native';

type Props = {
  book: Object
};

const Container = styled.View`
  padding: 15px;
`;
const RowStyled = styled.Text`
  color: #34495e;
`;
const DescriptionStyled = styled.Text`
  color: #34495e;
  margin-bottom: 20px;
  font-size: 18px;  
`;
const DetailContainer = styled.View`
  margin-bottom: 15px;
`;
const TitleStyled = styled.Text`
  color: #2c3e50;
  font-weight: 600;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom-width: 1px;
  border-bottom-color: #dfe6e9;
  font-size: 18;
`;
const ContentStyled = styled.Text`
  color: #34495e;
  font-size: 18px;  
`;

const Detail = ({title, content}: any) => (
  <DetailContainer>
    <TitleStyled>
      {title}
    </TitleStyled>
    <ContentStyled>
      {content}
    </ContentStyled>
  </DetailContainer>
)

const Details = ({ book }: Props) => {
  return (
    <Container>
      <DescriptionStyled>
        {book.description}
      </DescriptionStyled>

      <Detail
        title='Published'
        content={book.publishedDate}
      />

      <Detail
        title='Rank'
        content={book.rank}
      />

      <Detail
        title='Rank Previous Week'
        content={book.rankLastWeek}
      />
    </Container>
  );
};

export default Details;