import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
  avatar: {
    padding: "10px",
  },
  imgdiv: {
    border: "1px solid black",
    padding: "2px",
    margin: "2px",
    width: "150px",
    // overflowWrap: "break-word",
    // whiteSpace: "pre-wrap",
  },
  button: {
    border: "1px solid black",
    margin: "10px",
  },
});
const AllImages = ({
  images,
  loading,
  addComparision,
  removeComparision,
  comparedImages,
}) => {
  const classes = useStyles();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Box
        className={classes.root}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {images.slice(0, 5).map((img, idx) => (
          <div className={classes.imgdiv} key={img.id}>
            <img src={img.thumbnailUrl} alt="test" />
            <div>
              <strong>Title</strong> <span>{img.title}</span>
            </div>
            <div>
              <strong>Id</strong> <span>{img.id}</span>
            </div>
            <div>
              <strong>URL</strong>{" "}
              <span>
                <a href={img.url} target="_BLANK" rel="noreferrer">
                  Click Me
                </a>
              </span>
            </div>
            {comparedImages.some((el) => el.id === img.id) ? (
              <Button
                className={classes.button}
                onClick={() => removeComparision(img)}
              >
                Remove
              </Button>
            ) : (
              <Button
                className={classes.button}
                onClick={() => addComparision(img)}
              >
                Compare
              </Button>
            )}
          </div>
        ))}
      </Box>
      <Box
        className={classes.root}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {images.slice(5).map((img) => (
          <div className={classes.imgdiv} key={img.id}>
            <img src={img.thumbnailUrl} alt="test" />
            <div>
              <strong>Title</strong> <span>{img.title}</span>
            </div>
            <div>
              <strong>Id</strong> <span>{img.id}</span>
            </div>
            <div>
              <strong>URL</strong>{" "}
              <span>
                <a href={img.url} target="_BLANK" rel="noreferrer">
                  Click Me
                </a>
              </span>
            </div>
            {comparedImages.some((el) => el.id === img.id) ? (
              <Button
                className={classes.button}
                onClick={() => removeComparision(img)}
              >
                Remove
              </Button>
            ) : (
              <Button
                className={classes.button}
                onClick={() => addComparision(img)}
              >
                Compare
              </Button>
            )}
          </div>
        ))}
      </Box>
    </>
  );
};

export default AllImages;
