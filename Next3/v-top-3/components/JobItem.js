import React from "react";
import Button from "./UI/Button/Button";
import s from "@/styles/JobItem.module.scss";
import { FaCircleXmark } from "react-icons/fa6";

function JobItem(offerItem) {
  const { title, offerList, qualifications, skills, important } = offerItem;
  return (
    <div className={s.jobItem}>
        <FaCircleXmark />
      <h2>{title}</h2>
      <div className={s.headerJob}>
        <h5>Department</h5>
        <div className={s.line}></div>
        <h5>Experience</h5>
        <div className={s.line}></div>
        <h5>Employment type</h5>
      </div>

      <div className={s.scrollContainer}>
        <>
          {offerList && offerList.length > 0 ? (
            <ul>
              <h4>What we offer:</h4>
              {offerList.map((el) => (
                <li key={el.id}>— {el.offer}</li>
              ))}
            </ul>
          ) : null}
        </>

        <>
          {qualifications && qualifications.length > 0 ? (
            <ul>
              <h4>What we expect:</h4>
              {qualifications.map((el) => (
                <li key={el.id}>— {el.qualification}</li>
              ))}
            </ul>
          ) : null}
        </>

        <>
          {skills && skills.length > 0 ? (
            <ul>
              <h4>Knowledge of Technology:</h4>
              {skills.map((el, index) => (
                <li key={index}>— {el.technology}</li>
              ))}
            </ul>
          ) : null}
        </>
        <>
          {important && important.length > 0 ? (
            <ul>
              <h4>Important:</h4>
              {important.map((el, index) => (
                <li key={index}>— {el.requirement}</li>
              ))}
            </ul>
          ) : null}
        </>
      </div>
      <Button text="Apply this position" style="applyPosition" />
    </div>
  );
}

export default JobItem;
