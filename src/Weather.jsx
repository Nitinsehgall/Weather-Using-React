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
import Calendar from "./Calendar";

export default function Weather({
  searchvalue,
  name,
  temp,
  description,
  windSpeed,
  humidity,
  sunrise,
  main,
  cod,
}) {
  const [curTime, setCurTime] = useState();
  const [city, setCity] = useState(false);

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  // console.log(temp,'temppp');

  return (
    <section className="bgImage vh-100  flex items-center justify-center w-full">
      <MDBContainer className="h-100 flex items-center justify-center">
        <MDBRow className="justify-content-center align-items-center h-100  flex ">
          <p className="flex logo w-11/12 sm:w-full items-center text-slate-800 bg-transparent  border-l-8 font-bold">
            Mausam-<span className="text-cyan-700"> Instant weather
              </span>
          </p>
          
          <input
            className="w-4/5 sm:w-2/4 text-sm max-w-sm p-2 mb-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            onChange={searchvalue}
            type="text"
            placeholder="Enter the location to check the weather"
          />

          <MDBCol md="8" lg="6" xl="4" className=" w-full ">
            <MDBCard className=" flex weatherDiv bg-transparent  shadow-lg rounded-3xl ">
          <MDBCardBody className="p-6 flex flex-col items-center md:flex-row justify-between">
            <div className="flex-col justify-center items-center w-full md:w-4/5">
              <div className="flex justify-between md:flex-row items-center w-full mb-4">

                    <MDBTypography tag="h6" className="text-gray-800">
                      {name}
                    </MDBTypography>
                    <MDBTypography tag="h6">{curTime}</MDBTypography>
                  </div>

                  <div className="flex flex-col items-center mt-6 mb-4">
                    <MDBTypography
                      tag="h6"
                      className="text-4xl font-bold text-gray-800"
                    >
                      {cod == 400
                        ? "Searching..."
                        : cod == 404
                        ? "city not found "
                        : temp + "°"}
                    </MDBTypography>
                    <span className="text-sm text-gray-600">{description}</span>
                  </div>

                  <div className="flex justify-around items-center">
                    <div className="text-lg text-gray-600">
                      <div className="flex items-center mb-2">
                        <MDBIcon
                          fas
                          icon="wind fa-fw"
                          className="text-gray-600"
                        />
                        <span className="ml-2">{windSpeed} Km/Hr</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <MDBIcon
                          fas
                          icon="tint fa-fw"
                          className="text-gray-600"
                        />
                        <span className="ml-2">{humidity} %</span>
                      </div>
                      <div className="flex items-center">
                        <MDBIcon
                          fas
                          icon="sun fa-fw"
                          className="text-gray-600"
                        />
                        <span className="ml-2">{sunrise}</span>
                      </div>
                    </div>
                    <div className="WeatherImage w-14 sm:w-1/5 ">
                      {main === "Clear" ? (
                        <>
                          <span>Clear</span>
                          <img
                            src="https://png.pngtree.com/png-vector/20220917/ourmid/pngtree-vector-illustration-of-weather-icon-sun-with-clear-sky-vector-png-image_35563446.png"
                            alt="Clear"
                          />
                        </>
                      ) : main === "Haze" ? (
                        <>
                          <span>Haze</span>
                          <img
                            src="https://files.softicons.com/download/web-icons/android-weather-icons-by-bharath-prabhuswamy/png/512x512/Haze.png"
                            alt="Haze"
                          />
                        </>
                      ) : main === "Rain" ? (
                        <>
                          <span>Rain</span>
                          <img
                            src="https://seeklogo.com/images/R/rainy-weather-symbol-logo-B77AF66DC1-seeklogo.com.png"
                            alt="Rain"
                          />
                        </>
                      ) : (
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/6122/6122714.png"
                          width="150px"
                          alt="Default"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <Calendar />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
