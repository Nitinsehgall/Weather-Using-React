import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Weather({
  searchvalue,
  name,
  temp,
  description,
  windSpeed,
  humidity,
  sunrise,
  main,
}) {
  const [curTime, setCurTime] = useState();
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  useEffect(() => {
    setInterval(() => {
      setCurTime(time);
    }, 1000);
  }, [searchvalue]);

  return (
    <section className="vh-100" style={{ backgroundColor: "#4B515D" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <input
            style={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0px 0px 1px black",
            }}
            onChange={searchvalue}
            type="text"
            placeholder="Enter the location To Check the Weather"
          />
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex">
                  <MDBTypography tag="h6" className="flex-grow-1">
                    {name}
                  </MDBTypography>
                  <MDBTypography tag="h6">{time}</MDBTypography>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <MDBTypography
                    tag="h6"
                    className="display-4 mb-0 font-weight-bold"
                    style={{ color: "#1C2331" }}
                  >
                    {" "}
                    {temp}
                    {" °"}
                  </MDBTypography>
                  <span className="small" style={{ color: "#868B94" }}>
                    {description}
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                    <div>
                      <MDBIcon
                        fas
                        icon="wind fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1">{windSpeed} Km/Hr</span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="tint fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> {humidity} % </span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="sun fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> {sunrise} </span>
                    </div>
                  </div>
                  <div>
                    {
                      main == "Clear" ? 
                        <>
                        Clear
                          <img
                            src="https://png.pngtree.com/png-vector/20220917/ourmid/pngtree-vector-illustration-of-weather-icon-sun-with-clear-sky-vector-png-image_35563446.png"
                            width="100px"
                          />
                        </>
                       : main=='Haze'?
                        <>
                        Haze
                          <img
                            src="https://files.softicons.com/download/web-icons/android-weather-icons-by-bharath-prabhuswamy/png/512x512/Haze.png"
                            alt=""
                          />
                        </>
                      : main=='Rain'?
                      <>
                      Rain
                      <img src= 'https://seeklogo.com/images/R/rainy-weather-symbol-logo-B77AF66DC1-seeklogo.com.png' alt="" />
                      </>
                     :
                     <><img src="https://cdn-icons-png.flaticon.com/512/6122/6122714.png" alt="" /></>
                    }
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
