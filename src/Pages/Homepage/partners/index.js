import React, { useState, useEffect } from "react";
import "./Partners.css"; // Import CSS file for styling
import Picture1 from "../../../Assets/partners/Picture1.png";
import Picture2 from "../../../Assets/partners/Picture2.png";
import Picture3 from "../../../Assets/partners/Picture3.jpg";
import Picture4 from "../../../Assets/partners/Picture4.png";
import Picture5 from "../../../Assets/partners/Picture5.png";
import Picture6 from "../../../Assets/partners/Picture6.png";
import Picture7 from "../../../Assets/partners/Picture7.png";
import Picture8 from "../../../Assets/partners/Picture8.png";
import Picture9 from "../../../Assets/partners/Picture9.png";
import Picture10 from "../../../Assets/partners/Picture10.png";
import Picture11 from "../../../Assets/partners/Picture11.png";
import Picture12 from "../../../Assets/partners/Picture12.png";
import Picture13 from "../../../Assets/partners/Picture13.png";
import Picture14 from "../../../Assets/partners/Picture14.png";
import Picture15 from "../../../Assets/partners/Picture15.jpg";
import Picture16 from "../../../Assets/partners/Picture16.png";
import Picture17 from "../../../Assets/partners/Picture17.png";
import Picture18 from "../../../Assets/partners/Picture18.png";
import Picture19 from "../../../Assets/partners/Picture19.png";
import Picture20 from "../../../Assets/partners/Picture20.png";
import Picture21 from "../../../Assets/partners/Picture21.png";
import Picture22 from "../../../Assets/partners/Picture22.png";
import Picture23 from "../../../Assets/partners/Picture23.png";
import Picture24 from "../../../Assets/partners/Picture24.png";
import Picture25 from "../../../Assets/partners/Picture25.png";
import Picture26 from "../../../Assets/partners/Picture26.png";
import Picture27 from "../../../Assets/partners/Picture27.png";
import Picture28 from "../../../Assets/partners/Picture28.png";
import Picture29 from "../../../Assets/partners/Picture29.png";

const companies = [
  { id: 1, name: "Company A", logo: Picture1 },
  { id: 2, name: "Company B", logo: Picture2 },
  { id: 3, name: "Company C", logo: Picture3 },
  { id: 4, name: "Company", logo: Picture4 },
  { id: 5, name: "Company", logo: Picture5 },
  { id: 6, name: "Company", logo: Picture6 },
  { id: 7, name: "Company", logo: Picture7 },
  { id: 8, name: "Company", logo: Picture8 },
  { id: 9, name: "Company", logo: Picture9 },
  { id: 10, name: "Company", logo: Picture10 },
  { id: 11, name: "Company", logo: Picture11 },
  { id: 12, name: "Company", logo: Picture12 },
  { id: 13, name: "Company", logo: Picture13 },
  { id: 14, name: "Company", logo: Picture14 },
  { id: 15, name: "Company", logo: Picture15 },
  { id: 16, name: "Company", logo: Picture16 },
  { id: 17, name: "Company", logo: Picture17 },
  { id: 18, name: "Company", logo: Picture18 },
  { id: 19, name: "Company", logo: Picture19 },
  { id: 20, name: "Company", logo: Picture20 },
  { id: 21, name: "Company", logo: Picture21 },
  { id: 22, name: "Company", logo: Picture22 },
  { id: 23, name: "Company", logo: Picture23 },
  { id: 24, name: "Company", logo: Picture24 },
  { id: 25, name: "Company", logo: Picture25 },
  { id: 26, name: "Company", logo: Picture26 },
  { id: 27, name: "Company", logo: Picture27 },
  { id: 28, name: "Company", logo: Picture28 },
  { id: 29, name: "Company", logo: Picture29 },
];

const Partners = () => {
  const [chunkSize, setChunkSize] = useState(9);

  useEffect(() => {
    function handleWindowSizeChange() {
      if (window.innerWidth < 768) {
        // Adjust breakpoint as needed
        setChunkSize(3); // Change chunk size for mobile view
      } else {
        setChunkSize(9); // Default chunk size for larger screens
      }
    }

    // Initial check
    handleWindowSizeChange();

    // Event listener for window size change
    window.addEventListener("resize", handleWindowSizeChange);

    // Cleanup
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const chunkedCompanies = chunkArray(companies, chunkSize);
    setRows(chunkedCompanies);
  }, [chunkSize]);

  return (
    <section className="partners">
      <h1 className="headline">
        Brands That trust Us
      </h1>
      <div className="company-carousel">
        <div className="company-slides">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="company-row">
              {row.map((company) => (
                <div key={company.id} className="company-slide">
                  <img src={company.logo} alt={company.name} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
