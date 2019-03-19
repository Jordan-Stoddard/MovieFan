import React from "react";
import {nextPage, prevPage} from '../../helper-functions/onClick'


export default function ButtonContainer({page, setPage}) {
  return (
    <div className="button-container">
      <h1>{page}</h1>
      <button onClick={(e) => prevPage(e, page, setPage)} className="page-button-1">
        <p>PREV</p>
      </button>
      <button onClick={e => nextPage(e, page, setPage)} className="page-button-2">
        <p>NEXT</p>
      </button>
    </div>
  );
}
