import React, { useState, useEffect } from "react";
import AllImages from "./components/AllImages";
import Pagination from "./components/Pagination";
import Comparisiontable from "./components/Comparisiontable";
import axios from "axios";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [compareImages, setCompareImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(10);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setImages(res.data);
      setLoading(false);
    };

    fetchImages();
  }, []);

  // Get current images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //add to table
  const addComparision = (img) => {
    setCompareImages((compareImages) => [...compareImages, img]);
    console.log(compareImages);
  };
  const removeComparision = (img) => {
    setCompareImages(compareImages.filter((item) => item.id !== img.id));
    console.log(compareImages);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">
        All Images Current PageNo {currentPage}{" "}
      </h1>
      <AllImages
        images={currentImages}
        loading={loading}
        addComparision={addComparision}
        removeComparision={removeComparision}
        comparedImages={compareImages}
      />
      <Pagination
        imagesPerPage={imagesPerPage}
        totalImages={images.length}
        paginate={paginate}
      />
      <Comparisiontable imagesListing={compareImages} />
    </div>
  );
};

export default App;
