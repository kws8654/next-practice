import React from 'react';
import Link from 'next/link';

const news = () => {
  return (
    <>
      <div>news</div>
      <ul>
        <li>
          <Link
            href='/news/welcome
          '
          >
            Next Page
          </Link>
        </li>
        <li>Hello</li>
      </ul>
    </>
  );
};

export default news;
