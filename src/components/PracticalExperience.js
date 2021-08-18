import React, { useState } from "react";

let uniqId = require("uniqid");

const PracticalExperience = () => {
  const [visibility, setVisibility] = useState("flex");
  let [companyName, setCompanyName] = useState("Company Name");
  let [position, setPosition] = useState("Position");
  let [mainTasks, setMainTasks] = useState("Main Tasks");
  let [date, setDate] = useState("Date");

  const [jobs, setJobs] = useState([
    {
      id: uniqId(),
      nameOfCompany: companyName,
      companyPosition: position,
      Tasks: mainTasks,
      dateOfWork: date,
    },
    {
      id: uniqId(),
      nameOfCompany: "Company Name",
      companyPosition: position,
      Tasks: mainTasks,
      dateOfWork: date,
    },
  ]);

  const addJob = () => {
    let defaultCompanyName = "Company Name";
    let defaultPosition = "Position";
    let defaultTasks = "Main Tasks";
    let defaultDateOfWork = "Date";
    setJobs([
      ...jobs,
      {
        id: uniqId(),
        nameOfCompany: defaultCompanyName,
        companyPosition: defaultPosition,
        Tasks: defaultTasks,
        dateOfWork: defaultDateOfWork,
      },
    ]);
  };

  return (
    <div className="practicalExp">
      <div
        className="header"
        onMouseOver={(e) => {
          document.querySelector(`.practicalExp .header button`).style.display =
            "block";
        }}
        onMouseLeave={() => {
          document.querySelector(`.practicalExp .header button`).style.display =
            "none";
        }}
      >
        <h1>Experience</h1>
        <button onClick={addJob}>Add Job</button>
      </div>
      <Jobs
        visibility={visibility}
        setVisibility={setVisibility}
        companyName={companyName}
        setCompanyName={setCompanyName}
        position={position}
        setPosition={setPosition}
        mainTasks={mainTasks}
        setMainTasks={setMainTasks}
        date={date}
        setDate={setDate}
        jobs={jobs}
        setJobs={setJobs}
      />
    </div>
  );
};

const Jobs = (props) => {
  const handler = (e) => {
    let editable = document.querySelector(`form#${e.target.id}`);
    if (props.visibility === "none") {
      props.setVisibility("flex");
      editable.style.display = `${props.visibility}`;
    } else {
      props.setVisibility("none");
      editable.style.display = `${props.visibility}`;
    }
  };

  const deleteJob = (id) => {
    const jobsAfterDeletingJob = props.jobs.filter((job) => {
      return id !== job.id;
    });

    props.setJobs(jobsAfterDeletingJob);
  };

  return props.jobs.map((job) => {
    let { id, nameOfCompany, companyPosition, Tasks, dateOfWork } = job;
    return (
      <div
        key={id}
        className="job"
        onMouseOver={(e) => {
          document.querySelector(`.editJoblInfo#${id}`).style.display = "block";
          document.querySelector(`.saveJoblInfo#${id}`).style.display = "block";
          document.querySelector(`.deleteJob#${id}`).style.display = "block";
        }}
        onMouseLeave={() => {
          document.querySelector(`.editJoblInfo#${job.id}`).style.display =
            "none";
          document.querySelector(`.saveJoblInfo#${job.id}`).style.display =
            "none";
          document.querySelector(`.deleteJob#${id}`).style.display = "none";
        }}
      >
        <div className="modify">
          <p
            className="editJoblInfo"
            id={id}
            onClick={(e) => {
              handler(e);
            }}
          >
            Edit
          </p>
          <p
            className="saveJoblInfo"
            id={id}
            onClick={() => {
              let newJobs = props.jobs.filter((job) => {
                return id !== job.id;
              });
              const specificJob = props.jobs.filter((job) => {
                return job.id === id;
              });
              let newJob = specificJob[0];

              newJob.id = uniqId();
              newJob.nameOfCompany = nameOfCompany;
              newJob.companyPosition = companyPosition;
              newJob.Tasks = Tasks;
              newJob.dateOfWork = dateOfWork;

              props.setJobs([...newJobs, newJob]);
            }}
          >
            Save
          </p>
          <p
            className="deleteJob"
            id={id}
            onClick={() => {
              deleteJob(id);
            }}
          >
            Delete
          </p>
        </div>

        <form action="" className="editable" id={id}>
          <label htmlFor="nameOfCompany">Company Name:</label>
          <input
            type="text"
            className="nameOfCompany"
            onChange={(e) => {
              job.nameOfCompany = e.target.value;
              props.setCompanyName(
                job.nameOfCompany
              ); /* setJobs([{id: id, nameOfCompany: companyName,position: position, mainTasks, date}]); */
            }}
          />
          <label htmlFor="position">Position Title:</label>
          <input
            type="text"
            className="position"
            onChange={(e) => {
              job.companyPosition = e.target.value;
              props.setPosition(
                job.companyPosition
              ); /* setJobs([{id: id, nameOfCompany: companyName,position: position, mainTasks, date}]) */
            }}
          />
          <label htmlFor="mainTasks">Main tasks:</label>
          <input
            type="text"
            className="mainTasks"
            onChange={(e) => {
              job.Tasks = e.target.value;
              props.setMainTasks(
                job.Tasks
              ); /* setJobs([{id: id, nameOfCompany: companyName,position: position, mainTasks, date}]) */
            }}
          />
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            className="date"
            onChange={(e) => {
              job.dateOfWork = e.target.value;
              props.setDate(job.dateOfWork);
            }}
          />
        </form>

        <h2>{job.nameOfCompany}</h2>
        <h3>{job.companyPosition}</h3>
        <h3>{job.Tasks}</h3>
        <h3>{job.dateOfWork}</h3>
      </div>
    );
  });
};

export default PracticalExperience;
