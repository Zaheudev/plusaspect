import classes from "./styles.module.css";
import { useState } from "react";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Icon from "../../components/Icon";

let dt = new Date();
export default function Workwithus() {
  let [monthState, setMonthState] = useState(dt.getMonth());
  let [dayState, setDayState] = useState(null);
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
    document.getElementById("form").style.display = "none";
    dt.setMonth(dt.getMonth() + 1);
    setMonthState(dt.getMonth());
  };

  const prevMonth = () => {
    let tempDt = new Date();
    setDayState(null);
    document.getElementById("form").style.display = "none";
    if (
      dt.getMonth() > tempDt.getMonth() ||
      dt.getFullYear() > tempDt.getFullYear()
    ) {
      dt.setMonth(dt.getMonth() - 1);
      setMonthState(dt.getMonth());
    }
  };

  const selectDay = (e) => {
    document.getElementById("form").style.display = "flex";
    console.log(dayState === e.target.innerHTML.split("<")[0]);
    if(dayState === e.target.innerHTML.split("<")[0]){
      setDayState(null);
      document.getElementById("form").style.display = "none";
      return;
    }
    setDayState(e.target.innerHTML.split("<")[0]);
  };

  return (
    <section className={classes.container}>
      <header className={classes.head}>
        <h1>
          Great Choise,{" "}
          <span className={classes.purple}>Let s Start From Here</span>
        </h1>
        <p>
          You Can Program A <span className={classes.purple}>Zoom Meeting</span>
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
              return (dt.getDate() < e) || !(currentDt.getMonth() === dt.getMonth()) || !(currentDt.getFullYear() === dt.getFullYear()) ? (
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
          <div id="form" className={classes.form}>
            <button className={classes.button}>Send Data</button>
            <input className={classes.input} placeholder="E-MAIL"/>
          </div>
        </div>
        <span className={classes.verticalLine}></span>
        <hr/>
        <div className={classes.right}>
          <p className={classes.rightup}>
            {" "}
            In this meeting I will tell you{" "}
            <span className={classes.purple}>all the details</span> of our work,
            services, <span className={classes.purple}>prices</span> and{" "}
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
            <Icon image={facebook} alt={"facebook icon"} />
          </li>
          <li>
            <Icon image={instagram} alt={"instagram icon"} />
          </li>
          <li>
            <Icon image={telegram} alt={"telegram icon"} />
          </li>
          <li>
            <Icon image={whatsapp} alt={"whatsapp icon"} />
          </li>
        </ul>
      </footer>
    </section>
  );
}
