import React, { useState } from "react";

let uniqId = require("uniqid");

const EducationalExp = () => {
  const [visibility, setVisibility] = useState("flex");
  const [schoolName, setSchoolName] = useState("School Name");
  const [title, setTitle] = useState("Title Of Study");
  const [date, setDate] = useState("Date Of Study");
  const [schools, setSchools] = useState([
    {
      id: uniqId(),
      nameOfSchool: schoolName,
      titleOfStudy: title,
      dateOfStudy: date,
    },
    {
      id: uniqId(),
      nameOfSchool: "School Name",
      titleOfStudy: title,
      dateOfStudy: date,
    },
  ]);

  const addSchool = () => {
    setSchools([
      ...schools,
      {
        id: uniqId(),
        nameOfSchool: "School Name",
        titleOfStudy: "Title Of Study",
        dateOfStudy: "Date Of Study",
      },
    ]);
  };

  return (
    <div className="EducationalExp">
      <div
        className="header"
        onMouseOver={(e) => {
          document.querySelector(
            `.EducationalExp .header button`
          ).style.display = "block";
        }}
        onMouseLeave={() => {
          document.querySelector(
            `.EducationalExp .header button`
          ).style.display = "none";
        }}
      >
        <h1>Education</h1>
        <button
          onClick={() => {
            addSchool();
          }}
        >
          Add School
        </button>
      </div>

      <Schools
        visibility={visibility}
        setVisibility={setVisibility}
        schoolName={schoolName}
        setSchoolName={setSchoolName}
        title={title}
        setTitle={setTitle}
        date={date}
        setDate={setDate}
        schools={schools}
        setSchools={setSchools}
      />
    </div>
  );
};

const Schools = (props) => {
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

  const deleteSchool = (id) => {
    const schoolsAfterDeletingJob = props.schools.filter((school) => {
      return id !== school.id;
    });

    props.setSchools(schoolsAfterDeletingJob);
  };

  return props.schools.map((school) => {
    const { id } = school;
    return (
      <div
        className="school"
        key={id}
        onMouseOver={() => {
          document.querySelector(`.editSchoolInfo#${id}`).style.display =
            "block";
          document.querySelector(`.saveSchoolInfo#${id}`).style.display =
            "block";
          document.querySelector(`.deleteSchool#${id}`).style.display = "block";
        }}
        onMouseLeave={() => {
          document.querySelector(`.editSchoolInfo#${id}`).style.display =
            "none";
          document.querySelector(`.saveSchoolInfo#${id}`).style.display =
            "none";
          document.querySelector(`.deleteSchool#${id}`).style.display = "none";
        }}
      >
        <div className="modify">
          <p
            className="editSchoolInfo"
            id={id}
            onClick={(e) => {
              handler(e);
            }}
          >
            Edit
          </p>
          <p
            className="saveSchoolInfo"
            id={id}
            onClick={() => {
              let newSchools = props.schools.filter((school) => {
                return id !== school.id;
              });
              const specificJob = props.schools.filter((school) => {
                return school.id === id;
              });
              let newSchool = specificJob[0];

              newSchool.id = uniqId();
              newSchool.nameOfSchool = school.nameOfSchool;
              newSchool.titleOfStudy = school.titleOfStudy;
              newSchool.dateOfStudy = school.dateOfStudy;

              props.setSchools([...newSchools, newSchool]);
            }}
          >
            Save
          </p>
          <p
            className="deleteSchool"
            id={id}
            onClick={() => {
              deleteSchool(id);
            }}
          >
            Delete
          </p>
        </div>

        <form action="" className="editable" id={school.id}>
          <label htmlFor="schoolName">School Name:</label>
          <input
            type="text"
            className="schoolName"
            onChange={(e) => {
              school.nameOfSchool = e.target.value;
              props.setSchoolName(school.nameOfSchool);
            }}
          />
          <label htmlFor="schoolName">title Of Study:</label>
          <input
            type="text"
            className="titleOfStudy"
            onChange={(e) => {
              school.titleOfStudy = e.target.value;
              props.setTitle(school.titleOfStudy);
            }}
          />
          <label htmlFor="schoolName">Date Of Study:</label>
          <input
            type="text"
            className="dateOfStudy"
            onChange={(e) => {
              school.dateOfStudy = e.target.value;
              props.setDate(school.dateOfStudy);
            }}
          />
        </form>
        <h2>{school.nameOfSchool}</h2>
        <h3>{school.titleOfStudy}</h3>
        <h3>{school.dateOfStudy}</h3>
      </div>
    );
  });
};

export default EducationalExp;
