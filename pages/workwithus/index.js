import classes from "./styles.module.css";
import { Fragment, useState } from "react";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Icon from "../../components/Icon";

import axios from "axios";
import qs from "qs";
import Head from "next/head";
import LogoHeader from "../../components/LogoHeader";
import CountryField from "../../components/CountryField";

let dt = new Date();
export default function Workwithus() {
  let [monthState, setMonthState] = useState(dt.getMonth());
  let [dayState, setDayState] = useState(null);
  let [status, setStatus] = useState(null);
  let currentDt = new Date();
  let month = dt.getMonth();
  let year = dt.getFullYear();
  let days = new Date(year, month + 1, 0).getDate();
  let firstDay = new Date(year, month).getDay();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octomber",
    "November",
    "December",
  ];

  let daysName = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  let numberDays = [];
  let counter = 1;
  for (let i = 0; i < days; i++) {
    numberDays.push(counter);
    counter++;
  }

  const nextMonth = () => {
    setDayState(null);
    dt.setMonth(dt.getMonth() + 1);
    setMonthState(dt.getMonth());
  };

  const prevMonth = () => {
    let tempDt = new Date();
    setDayState(null);
    if (
      dt.getMonth() > tempDt.getMonth() ||
      dt.getFullYear() > tempDt.getFullYear()
    ) {
      dt.setMonth(dt.getMonth() - 1);
      setMonthState(dt.getMonth());
    }
  };

  const selectDay = (e) => {
    document.getElementById("modal").style.display = "block";
    console.log(dayState === e.target.innerHTML.split("<")[0]);
    if (dayState === e.target.innerHTML.split("<")[0]) {
      setDayState(null);
      document.getElementById("modal").style.display = "none";
      return;
    }
    setDayState(e.target.innerHTML.split("<")[0]);
  };

  const sendData = () => {
    let day = dayState;
    let email = document.getElementById("input2").value;
    let phone = document.getElementById("input1").value;
    let country = document.getElementById("country").value;
    document.getElementById("sendButton").style.display = "none";
    document.getElementById("loader").style.display = "block";

    let data = qs.stringify({
      email: email,
      day: day,
      month: month + 1,
      year: year,
      phone: phone,
      country: country,
    });
    var config = {
      method: "post",
      url: "https://us-central1-plus-aspect.cloudfunctions.net/sendData/",
      // url: "http://localhost:5001/plus-aspect/us-central1/sendData",
      withCredentials: false,
      // origin: "http://localhost:3000",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // document.getElementById("modal").style.display = "block";
         if (response.status === 200) {
          //data ok, show valid message
          document.getElementById("sendButton").style.display = "block";
          document.getElementById("loader").style.display = "none";
          setStatus(200);
        }
      })
      .catch(function (error) {
        console.log(error);
        document.getElementById("input2").value = "";
        document.getElementById("input1").value = "";
        document.getElementById("sendButton").style.display = "block";
        document.getElementById("loader").style.display = "none";
        setStatus(400);
      });
  };

  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
    setStatus(null);
    setDayState(null);
  };

  const setValid = () => {
    setStatus(null);
  }

  return (
    <Fragment>
      <Head>
        <title>Plus Aspect | Work With Us</title>
        <meta name="description" content="Plus Aspect offers you a page where you can appoint a meeting call to work with us and settle everything" />
      </Head>
      <div id="modal" className={classes.modalContainer}>
        <div className={classes.modal}>
          {status !== 200 && (
            <div id="form" className={classes.form}>
              <button id="sendButton" className={classes.button} onClick={sendData}>
                Send
              </button>
              <div id="loader" className={classes.loader}></div>
              <CountryField status={status}/>
              <input
                id="input1"
                name="Phone Number"
                className={status !== 400 ? classes.input : `${classes.input} ${classes.error}`}
                placeholder="Phone Number"
                onChange={setValid}
              />
              <input
                id="input2"
                name="email"
                className={status !== 400 ? classes.input : `${classes.input} ${classes.error}`}
                placeholder="E-MAIL"
                onChange={setValid}
                autoFocus
              />
              {status !== 400 ? <p>Please fill these fields to keep in touch</p> : <p style={{color: "red"}}>Please insert correct data</p>}
            </div>
          )}
          {status === 200 && <div className={classes.valid}>Thanks for request! We will contact you very soon via whatsapp or mail</div>}
        </div>
        <div onClick={closeModal} className={classes.backdrop} />
      </div>
      <section className={classes.container}>
        <header className={classes.head}>
          <LogoHeader/>
          <h1>
            Great Choise,{" "}
            <span className={classes.purple}>Let&apos;s Start From Here</span>
          </h1>
          <p>
            You Can Program A{" "}
            <span className={classes.purple}>Zoom Meeting</span>
          </p>
        </header>
        <main className={classes.center}>
          <div className={classes.calendar}>
            <h1>Select a Day</h1>
            <div className={classes.month}>
              <ul>
                <li className={classes.prev} onClick={prevMonth}>
                  &#10094;
                </li>
                <li className={classes.next} onClick={nextMonth}>
                  &#10095;
                </li>
                <li>
                  {months[monthState]}
                  &nbsp;
                  {year}
                </li>
              </ul>
            </div>
            <ul className={classes.weekdays}>
              <li className={classes.purple}>MON</li>
              <li className={classes.purple}>TUE</li>
              <li className={classes.purple}>WED</li>
              <li className={classes.purple}>THU</li>
              <li className={classes.purple}>FRI</li>
              <li className={classes.purple}>SAT</li>
              <li className={classes.purple}>SUN</li>
            </ul>

            <ul className={classes.days}>
              {daysName.map((e, i) => {
                if (i < firstDay - 1) {
                  return <li key={e}></li>;
                }
              })}
              {numberDays.map((e, i) => {
                return dt.getDate() < e ||
                  !(currentDt.getMonth() === dt.getMonth()) ||
                  !(currentDt.getFullYear() === dt.getFullYear()) ? (
                  e.toString() !== dayState ? (
                    <li className={classes.day} key={i} onClick={selectDay}>
                      {e}
                    </li>
                  ) : (
                    <li className={classes.active} key={i} onClick={selectDay}>
                      {e}
                    </li>
                  )
                ) : (
                  <li className={classes.innactiveDay} key={i}>
                    {e}
                  </li>
                );
              })}
            </ul>
          </div>
          <span className={classes.verticalLine}></span>
          <hr />
          <div className={classes.right}>
            <p className={classes.rightup}>
              {" "}
              In this meeting I will tell you{" "}
              <span className={classes.purple}>all the details</span> of our
              work, services, <span className={classes.purple}>prices</span> and{" "}
              <span className={classes.purple}>offers</span>
            </p>
            <p className={classes.rightdown}>
              *This meeting will last around 15-40 minutes
            </p>
          </div>
        </main>
        <footer className={classes.footer}>
          <h1>
            Or You Can <span className={classes.purple}>Message Us</span> Here
          </h1>
          <p>contactus@plusaspect.com </p>
          <ul>
            <li>
              <Icon image={facebook} alt={"facebook icon"} link={"https://www.facebook.com/Plus-Aspect-113498961376645"}/>
            </li>
            <li>
              <Icon image={instagram} alt={"instagram icon"} link={"https://www.instagram.com/plusaspect/"} />
            </li>
            <li>
              <Icon image={telegram} alt={"telegram icon"} link={"https://www.facebook.com/Plus-Aspect-113498961376645"}/>
            </li>
            <li>
              <Icon image={whatsapp} alt={"whatsapp icon"} link={"https://www.facebook.com/Plus-Aspect-113498961376645"}/>
            </li>
          </ul>
        </footer>
      </section>
    </Fragment>
  );
}
