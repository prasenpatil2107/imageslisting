import React from "react";

const Comparisiontable = ({ imagesListing }) => {
  return (
    <>
      <table border="2">
        <tbody>
          <tr>
            <td>Photo</td>
            <td>Id</td>
            <td>URL</td>
            <td>Title</td>
          </tr>
          {imagesListing.map((numList, i) => (
            <tr key={i}>
              <>
                <td>
                  <img key={numList.id} src={numList.thumbnailUrl} alt="test" />
                </td>
                <td>{numList.id}</td>
                <td>{numList.url}</td>
                <td>{numList.title}</td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Comparisiontable;
