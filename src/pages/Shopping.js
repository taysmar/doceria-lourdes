import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Shopping() {
  return (
    <>
      <h1>Shopping page</h1>
      <Link to="/about">About</Link>
    </>
  );
}