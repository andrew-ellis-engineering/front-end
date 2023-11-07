import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from "react-bootstrap/Container";
import { CImage } from '@coreui/bootstrap-react';

import headShot from '../../assets/images/headshot.jpg';
import GitHubCards from '../GithubCards/GithubCards';

export default function Home() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="home"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <CImage rounded className="w-50 h-50" src={headShot} />
          <br/>
          I am Andrew Ellis, a software engineer.
          <br/>
          Feel free to check out the projects I have listed below, and explore my page to learn more about me.
          <GitHubCards />
        </Tab>
        <Tab eventKey="experience" title="Experience">
          <h6>Indeed</h6>
          <p>
            I began at Indeed 2021 as a QA Automation Engineer. 
            I have written Selenium based test automation for React and Angular frontend applications, API test automation for Ruby on Rails, Java Springboot gRPC applications, GraphQL APIs, and end-to-end API testing for event based architectures with data flowing to third party integrations.
            In 2023 Indeed made a strategic decision to remove QA and transfer automation staff to software engineering positions. 
            As a part of that transition, I have completed Thinkful (now Chegg Skills) certifcations in Front End Development (React course), Back End Development (Express and PostGres coruse), and Data Structures and Algorithms, earning a Chegg Skills and Indeed co-branded Software Engineering Certificate.
            I have also educated my team on our test automation and enabled them to contribute to it themselves, and am now working full time as a Back End Developer on our Java Springboot gRPC, Java GraphQL, and Scala applications.
          </p>
          <h6>WellSky</h6>
          <p>
            I started at WellSky doing manual testing and test documentation as a part of bidding on contracts with clients. 
            My Computer Science and programming background led to me building thee test automation suite for the business unit I was in entirely from the ground up. 
            I then transitioned to a full stack engineering position, working in a Ruby on Rails API and a variety of Angular frontend applications. 
            I integrated our test automation suite into our docker-compose local development stack in order to make the test automation available to the whole team both locally or against a variety of our other environments. 
            I also was responsible for on-call shifts, debugging production issues with the team, and doing our bi-weekly production deployments.
          </p>
          <h6>MIT Lincoln Laboratory</h6>
          <p>
            I interned in the Secure and Resilient Systems division at the MIT Lincoln Laboratory in the Summer of 2018 under Dr Emily Shen. 
            My internship was essentially broken into three parts: a survey of Machine Learning techniques for clustering data, designing an algorithm to perform K-Medoids clustering through Multiparty Computation, and implementating that algorithm in a C++17 internally built framework for Multiparty Computation. 
            I presented a work-in-progress talk on my project halfway through the internship, studied and presented a talk on Zero Knowledge Proofs constructed from Multiparty Computation [<a href="https://web.cs.ucla.edu/~rafail/PUBLIC/77.pdf">link</a>], and wrote and presented a full length research paper on my project.
          </p>
        </Tab>
        <Tab eventKey="interests" title="Interests">
          <Tabs
            defaultActiveKey="professional"
            className="mb-3"
          >
            <Tab eventKey="professional" title="Professional">
              <h6>Machine Learning</h6>
              <p>
                With the way the tech industry is headed right now, learning about Machine Learning makes sense.
                ML and AI are the future of our technological world, and I very much intend to be a part of that. 
                I am enrolled for Spring 2024 in a Graduate Machine Learning course at Georgia Tech.
                I am additionally in the process of planning a personal project using Python to develop a ML model to predict winners of NCAA Men's Basketball Tournament games, as a way to learn more about both ML and programming in Python.
              </p>
              <h6>Back End Development</h6>
              <p>
                My favorite part of web development is working on the backend. 
                I get a deep sense of satisfaction from taking an idea to architecture to implementation in order to assure that data winds up in the right place and is used repsonsibly and securely to get the desired outcome. 
                While I am a capable frontend engineer, working with systems architecture, various programming languages, databases, and infrastructure just appeals to me more.
              </p>
              <h6>CI/CD</h6>
              <p>
                I am a firm believer that the best way to deliver quality products to customers is through incremental and frequent improvements. 
                Continuous Integration and Continuous Development offers the ability to mmove quickly as engineers, both to deliver our code and to fix issues in a timely fashion. 
                Enabling CI/CD has been a big part of my career to date and I have every intention of continuing to enable that with every team I am on going forward.
              </p>
              <h6>Test Automation</h6>
              <p>
                One of the most important parts of CI/CD is test automation. 
                By automating tests and integrating them into deploy pipelines, we are able to ensure the correct functionality of core workflows in our systems, which will prevent major outages in our applications more often than not. 
                My personal testing philosophy is as follows: minimum 85% coverage on unit tests, integration tests for every 'happy path' call to each API endpoint, end-to-end api tests for thee core funcitionalities of our whole system, Selenium based testing for the core happy path functions of our web applications, and manual testing for any new frontend features or critical business concerns.
              </p>
              <h6>DevOps</h6>
              <p>
                When the general population thinks of software engineering, they usually just think of creating websites and mobile applications.
                They don't often understand the significance of back end development or databases, and they certainly do not understand the infrastructure work that goes into getting a software product off the ground.
                The infrastructure work is a logical extension of my career experience in QA Automation to me, as it is a broader scope area of work that still aims to ensure that products go out the door working in proper order.
                The DevOps work for this personal website includes configuring a domain name, using CI/CD pipelines to deploy the application, using Terraform to configure the infrastructure, and setting up the VMs in a cloud service to host the site itself.
              </p>
              <h6>Cryptography</h6>
              <p>
                I am deeply fascinated by Cryptography, with particular interests in encryption and multiparty computation. 
                There is something almost magical to me about using mathematics for data security in such a way that allows us to communicate our most important information with little to no cause for concern. 
                I have an academic and professional background in multiparty computation, having designed and implemented an algorithm for k-medoids clustering via multiparty computation during my internship at the MIT Lincoln Laboratory. 
                I am hoping to find the time to learn more about moden encryption algorithms like AES and TLS, as well as to understand post-quantum cryptography.
              </p>
            </Tab>
            <Tab eventKey="languages" title="Languages">
              <h6>Professional Experience</h6>
              <p>Java, JavaScript, TypeScript, Ruby, SQL, Bash, C++</p>
              <h6>Informal Experience</h6>
              <p>Python, C#, Kotlin</p>
              <h6>Excited to learn</h6>
              <p>Rust, Golang</p>
            </Tab>
            <Tab eventKey="personal" title="Personal">
              <h6>Family</h6>
              <p>
                I love most of all spending time with my wife, daughter, and dogs.
                They light up my world, and ultimately everything I do in my career is so that I can take care of my family.
              </p>
              <h6>UK Sports</h6>
              <p>
                I was born and raised in Kentucky, and have been a lifelong fan of University of Kentucky Athletics.
                My family and I are especially big fans of the UK Football and Basketball programs, and try to make time each year to attend games.
              </p>
              <h6>Coffee</h6>
              <p>
                After the birth of my duaghter, I purchased a home espresso machine for expedient caffeination. 
                I did not expect to find so much joy in making espresso drinks at home, but it has become my favorite part of my morning ritual. 
                A nice cup of coffee is the best way to start the day.
              </p>
              <h6>Video Games</h6>
              <p>
                Like many people, I enjoy playing video games when I get the chance. Some of my favorites are early versions of Pokemon, Red Dead Redemption 2, Star Wars Jedi: Fallen Order, and Spider-man.
              </p>
              <h6>Bourbon</h6>
              <p>
                As a Kentuckian, the appreciation for Bourbon comes naturally.
                I actually spent some time before beginning my Software Engineering career working at a micro-distillery in Kentucky, actually distilling bourbon and other spirits, giving tours and tastings, doing sales and marketing work, and other odd jobs around the distillery.
                It was there that I actually met my wife for the first time, and after we got together, I put together private barrel selections for a group local to Lexington, KY.
                One of our more fond memories is when my wife and I actually went together to pick out a barrel for the group.
                I am also a Certified Bourbon Steward, a professional certification from the Stave and Thief Society.
              </p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey="education" title="Education">
          <h5>Master's Degree</h5>
          <p>
            I am currently enrolled in a Master's of Science Program in Computer Science at Georgia Tech. I am specializing in Computing Systems.
            <br/>
            <b>Coursework:</b>
            <br/>
            Machine Learning <i>(Spring 2024)</i><br/>
            Video Game Design <br/>
            Software Architecture and Design <br/>
            Software Testing <br/>
            Introduction to Information Security <br/>
            Database Systems and Design <br/>
            <b>Transferred from NCSU:</b> <br/>
            Applied Cryptography <br/>
            System and Network Defenses
          </p>
          <h5>PhD Coursework</h5>
          <p>
            I was enrolled in a Computer Science PhD program at North Carolina State University for a semester and a half starting in 2017. I withdrew for personal reasons and began my Software Engineering career thereafter.
            <br/>
            <b>Research:</b><br/>
            Multiparty Computation <br/>
            Zero Knowledge Proofs <br/>
            Blockchain Protocols<br/>
            <b>Courses:</b><br/>
            Applied Cryptography <br/>
            Systems Attacks and Defenses
          </p>
          <h5>Bachelor's Degree</h5>
          <p>
            I graduated with a Bachelor's of Arts in Mathematics and Computer Science from Transylvania University in 2017.
            <br/>
            I received Honors in both Mathematics and Computer Science.
          </p>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          Contact me at andrew.ellis.engineering at gmail.com
        </Tab>
      </Tabs>
    </Container>
  );
}
