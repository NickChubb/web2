import React from 'react';
import { BsLink45Deg } from 'react-icons/bs'
import styled from 'styled-components';
import { bookData } from '../../../data/books';
import { ExternalLink, StyledLink } from '../../shared/link';
import { text } from '../../shared/styles';

const BookList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`

const BookListItem = styled.li`

  &:hover {
    &:before {
      color: ${text.green};
    }
  }

  &:before {
    content: '>  ';
  }
`

const BookshelfSection = () => {
  return (
    <BookList>
      {bookData && bookData.length > 0
        ? bookData.map((book, key) => (
            <BookListItem className="links-menu"  key={key}>
              <ExternalLink href={book.link} target="_blank" rel="noreferrer">
                <b>{book.title}</b> <i>by</i> {book.author}{' '}
                <small style={{ color: 'seagreen' }}>
                  <BsLink45Deg />
                </small>
              </ExternalLink>
              <br />
              {/* {
                // If book has notes display BookNotes component
                book.Notes && book.Notes.length > 0 ? (
                  <BookNotes notes={book.Notes} />
                ) : null
              } */}
            </BookListItem>
          ))
        : null}
    </BookList>
  );
};

export default BookshelfSection;
