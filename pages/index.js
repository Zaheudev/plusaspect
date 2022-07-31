import Head from "next/head";
import Link from "next/link";
import classes from "../styles/Home.module.css";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import logo from "../assets/logo.png";

import setup from "../assets/setup.png";

import stars2 from "../assets/stars/stars2.svg";
import stars3 from "../assets/stars/stars3.svg";
import stars4 from "../assets/stars/stars4.svg";
import stars5 from "../assets/stars/stars5.svg";
import stars6 from "../assets/stars/stars6.svg";

import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";

import Image from "next/image";
import Icon from "../components/Icon.js";
import Review from "../components/Review";

export default function Home() {
  const viewReviews = (e) => {
    let state = document.getElementById("reviews").style.display;
    document.getElementById("reviews").style.display =
      state === "none" || state === "" ? "block" : "none";
  };

  return (
    <div className={classes.container}>
      <Head>
        <title>Plus Aspect</title>
        <meta name="description" content="Plus Aspect official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.navbar}>
        <ul>
          <Image
            // loader={myLoader}
            src={logo}
            alt={"logo"}
            // width={230}
            // height={90}
          />
          <span className={classes.contact}>
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
            <li>
              <a>Become&nbsp;&nbsp;Friends&nbsp;&nbsp;With&nbsp;&nbsp;Us</a>
            </li>
          </span>
        </ul>
      </div>
      <main>
        <section className={classes.intro}>
          <div className={classes.introText}>
            <h1 className={classes.introTextH1}>
              Build Your Business The <br />
              <span className={classes.purple}>Right Way</span>, With Everything
              <br />
              Perfectly <span className={classes.purple}>Structured</span>
            </h1>
            <p className={classes.introTextP}>
              We Provide You <span className={classes.purple}>All In One</span>{" "}
              Services, From The <br /> Brand Strategy to Website/Logo to Sales
            </p>
            <div className={classes.videoMobile}>
              <div className={classes.videoContainerMobile}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/K5G4IuVMHQM"
                  title="This is +Aspect"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
              <p>
                Understand <span className={classes.purple}>Everything</span>{" "}
                About Us
              </p>
            </div>
            <div className={classes.introBottom}>
              <div className={classes.starsContainer}>
                <Image
                  // loader={myLoader}
                  src={stars4}
                  alt={"stars"}
                />
                <span className={classes.starsText}>
                  &nbsp;&nbsp;(4.4/5) <span>Over 12 Satisfied Clients</span>
                </span>
              </div>
              <button onClick={viewReviews} className={classes.reviewsBtn}>
                view reviews
              </button>
            </div>
            <div id="reviews" className={classes.reviews}>
              <Review
                avatar={avatar1}
                stars={stars6}
                grade={"4.8"}
                name={"Bernard Stojanovic"}
                description={
                  "Great guys overall, I loved the communication skils and how fast they worked. On the services side I'm pleased with the results, the design is amazing and I got a lot of stuff for that price"
                }
              />
              <Review
                avatar={avatar3}
                stars={stars5}
                grade={"4.5"}
                name={"Ted J.Albert"}
                description={
                  "Good job! I didn t realy trusted some teenagers to build my business but they surprized me, extreamely smart guys , good quality of the logo and website , and some interesting strategies!"
                }
              />
              <Review
                avatar={avatar2}
                stars={stars3}
                grade={"4.3"}
                name={"Alice Croft"}
                description={
                  "I love it! I just gave them some ideas and they made everything for me, they even helped me after, running the business further because i don t know very mouch about marketing and design  If you want something done good without spending effort work with this guys!"
                }
              />
              <Review
                avatar={avatar4}
                stars={stars2}
                grade={"4"}
                name={"Eduardo Folliero"}
                description={
                  "Perfect, they did all i needed for my jetsky rental store, from the logo, banners, cool website and some advices to get new clients I recommend +aspect for any tipe of business, they can realy help you"
                }
              />
            </div>
          </div>
          <div className={classes.video}>
            <div className={classes.videoContainer}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/K5G4IuVMHQM"
                title="This is +Aspect"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              ></iframe>
            </div>
            <p>
              Understand <span className={classes.purple}>Everything</span>{" "}
              About Us
            </p>
          </div>
        </section>

        <section className={classes.howWeWork}>
          <h1>
            This Is <span className={classes.purple}>How We Work</span>
          </h1>
          <p className={classes.howWeWorkP}>Just 5 Simple Steps</p>
          <div className={classes.groups}>
            <div className={classes.group}>
              <div>
                <h1>
                  <span className={classes.purple}>CEO</span> Online{" "}
                  <span className={classes.purple}>Meeting</span>
                </h1>
                <p>
                  1 Hour Call Were We Will Discuss Everything About The Business
                  Plan/How To Bring Your Ideas To Life
                </p>
              </div>
              <span className={classes.plus2}>+</span>
              <div>
                <h1>
                  Building{" "}
                  <span className={classes.purple}>Visual Identity</span>
                </h1>
                <p>
                  Making The Overall Special Brand Look / Deciding The Temathic
                  , Colors , Style , Brand Voice..
                </p>
              </div>
              <span className={classes.plus2}>+</span>
              <div>
                <h1>
                  Making The <span className={classes.purple}>Website</span>/
                  <span className={classes.purple}>Logo</span>
                </h1>
                <p>
                  We Will Take You Creative Ideas And Turning Them Into A
                  Special Logo That Fits In Todays Market
                </p>
              </div>
            </div>
            <div className={classes.group}>
              <div>
                <h1>
                  Social Media/<span className={classes.purple}>Posts</span>
                </h1>
                <p>
                  We Will Even Take Care Of Your Social Media Accounts So
                  Everything Is Done Professionally
                </p>
              </div>
              <span className={classes.plus3}>+</span>
              <div>
                <h1>
                  Final Step :
                  <span className={classes.purple}> Making Money</span>
                </h1>
                <p>
                  Everything Will Be Done For You So Your Only Problem Remains
                  To Make A Tone Of Money!
                </p>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className={classes.groupsMobile}>
            <div className={classes.group}>
              <div>
                <h1>
                  <span className={classes.purple}>CEO</span> Online{" "}
                  <span className={classes.purple}>Meeting</span>
                </h1>
                <p>
                  1 Hour Call Were We Will Discust Everything About The Business
                  Plan/How To Bring Your Ideas To Life
                </p>
              </div>
              <span className={classes.plus2}>+</span>
              <div>
                <h1>
                  Building{" "}
                  <span className={classes.purple}>Visual Identity</span>
                </h1>
                <p>
                  Making The Overall Special Brand Look / Deciding The Temathic
                  , Colors , Style , Brand Voice..
                </p>
              </div>
            </div>
            <div className={classes.group}>
              <div>
                <h1>
                  Social Media/<span className={classes.purple}>Posts</span>
                </h1>
                <p>
                  We Will Even Take Care Of Your Social Media Accounts So
                  Everything Is Done Professionally
                </p>
              </div>
              <span className={classes.plus3}>+</span>
              <div>
                <h1>
                  Making The <span className={classes.purple}>Website</span>/
                  <span className={classes.purple}>Logo</span>
                </h1>
                <p>
                  We Will Take You Creative Ideas And Turning Them Into A
                  Special Logo That Fits In Todays Market
                </p>
              </div>
            </div>
            <div className={classes.group}>
              <div>
                <h1>
                  Final Step :
                  <span className={classes.purple}> Making Money</span>
                </h1>
                <p>
                  Everything Will Be Done For You So Your Only Problem Remains
                  To Make A Tone Of Money!
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className={classes.buttons}>
          <Link href="/workwithus">
            <a className={classes.button1}>Work With Us </a>
          </Link>
          <Link href="/learn">
            <a className={classes.button2}>Learn For Free</a>
          </Link>
        </div>
        <section className={classes.benefits}>
          <h1>
            Our Special <span className={classes.purple}>Benefits</span>
          </h1>
          <div className={classes.panels}>
            <div className={classes.panel}>
              <div className={classes.panelTitle}>
                <span className={classes.plus}>+</span>
                <h1>Protect</h1>
              </div>
              <p>
                +Protect is our safety warranty that will make sure that your
                <span className={classes.purple}> business will work </span>and
                stays updated <br />
                <br /> -
                <span className={classes.purple}>
                  {" "}
                  We will keep you up to date{" "}
                </span>
                for every new trend, every new idea that you come with, or every
                change that you want to make
                <br />
                <br /> -Basicaly while you have this
                <span className={classes.purple}>
                  {" "}
                  we will be there for you{" "}
                </span>
                and help with everything! <br />
                <br /> *we are the only one doing it..
              </p>
            </div>
            <div className={classes.panel}>
              <div className={classes.panelTitle}>
                <span className={classes.plus}>+</span>
                <h1>Care</h1>
              </div>
              <p>
                Since we take only one customer at a time, we are able to:
                <br />
                <br /> -<span className={classes.purple}>Work very fast</span>
                <br />
                <br /> -Give you{" "}
                <span className={classes.purple}> daily updates </span> of the{" "}
                <span className={classes.purple}> progress</span>
                <br />
                <br /> -Build everything from
                <span className={classes.purple}> passion </span>not obligation
                <br />
                <br />
                *usually big companies tent to ignor the small special details
                and make everything copy paste..
              </p>
            </div>
            <div className={classes.panel}>
              <div className={classes.panelTitle}>
                <span className={classes.plus}>+</span>
                <h1>Safe Pay</h1>
              </div>
              <p>
                +Safe Pay is a system that saves you from
                <span className={classes.purple}> getting scamed </span>
                <br />
                <br /> -3 step pay (this will make you
                <span className={classes.purple}> pay for the progress</span>,
                not once at the start)
                <br />
                <br /> -You will have to pay a
                <span className={classes.purple}> small part in advance </span>
                only after we discuss everything about
                <span className={classes.purple}> your business </span>
                <br />
                <br /> -We will even teach you how to
                <span className={classes.purple}> use crypto </span>(for sending
                money and receiving)
                <span className={classes.purple}> because is 2022</span>, you
                have to know..
              </p>
            </div>
          </div>
          <p className={classes.paragraph}>
            *If All Of This Doesn&apos;t Make You Want To Work With Us Nothing
            Will
          </p>
          <Link href={"/workwithus"}>
            <button className={classes.button1}>
              It Actually Does, Let&apos;s Do It!
            </button>
          </Link>
        </section>
        <section className={classes.magic}>
          <h1>This Is Were The Magic Happens</h1>
          <div>
            <Image
              // loader={myLoader}
              src={setup}
              className={classes.setup}
              width="900"
              height="450"
              alt={"setup"}
            />
          </div>
        </section>
      </main>
      <footer className={classes.footer}>
        <h2>DISCLAIMER</h2>
        <p>
          *This Is Not A Regular Business Just A Advanced Freelancer Project
          Made By Genius Teenagers
        </p>
      </footer>
    </div>
  );
}
