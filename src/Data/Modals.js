import React from 'react';
import MedReport from "../components/MedReport";

let Modals =
    [
      {
        id: "regmod",
        title: "Registration",
        body:(
          <MedReport/>
        )
      },
      {
        id: "consultmod",
        title: "Consultation",
        body:(
          <MedReport/>
        )
      },
      {
        id: "addismod",
        title: "Admissions & Discharge",
        body:(
          <MedReport/>
        )
      },
      {
        id: "immunemod",
        title: "Immunization",
        body:(
          <MedReport/>
        )
      },
      {
        id: "labmod",
        title: "Laboratory",
        body:(
          <MedReport/>
        )
      },
      {
        id: "pharmmod",
        title: "Pharmacy",
        body:(
          <MedReport/>
        )
      },
      {
        id: "theatremod",
        title: "Theatre",
        body:(
          <MedReport/>
        )
      },
      {
        id: "waitmod",
        title: "Waiting Time",
        body:(
          <MedReport/>
        )
      },
      {
        id: "radiomod",
        title: "Radiology",
        body:(
          <MedReport/>
        )
      }
    ]

export default Modals;