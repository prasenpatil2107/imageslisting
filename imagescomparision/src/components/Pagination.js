import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  span: {
    border: "1px solid black",
    padding: "2px",
    margin: "2px",
  },
  div: {
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
  },
});

const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];
  const classes = useStyles();

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.div}>
      {pageNumbers.map((number) => (
        <span key={number} className={classes.span}>
          <a onClick={() => paginate(number)} href="!#" className="page-link">
            {number}
          </a>
        </span>
      ))}
    </div>
  );
};

export default Pagination;
