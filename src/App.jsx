import { useState } from "react";

import './styles/App.css'
// import components here
import PersonalDetails from "./components/person-info/PersonalDetails";
import EducationDetails from "./components/education-info/EducationDetails.jsx";
import ExperienceDetails from "./components/experience-info/ExperienceDetails.jsx";
import AccordionUsage from "./components/common/DropDownTemplate.jsx";
import AccordionUsageReal from "./components/common/DropDown.jsx";
import ListDividers from "./components/common/Entries.jsx";
// data
import { EducationSample } from "./components/education-info/education-sample.js";
import { ExperienceSample } from "./components/experience-info/experience-sample.js";
const educData = EducationSample
const expData = ExperienceSample
// import uniqid
// import example data


function App() {

    return (
        <div className="app">
            <div className="edit-area">
                <div className="header">Odin Project: CV Generator</div>
                <div className="detail-container">
                    <PersonalDetails />

                    <AccordionUsage title={'Education'} editForm={<EducationDetails />}>
                        <ListDividers data={educData} />
                    </AccordionUsage>

                    <AccordionUsage title={'Experience'} editForm={<ExperienceDetails />}>
                        <ListDividers data={expData} />
                    </AccordionUsage>


                </div>
                <div>footer </div> {/*make this a component, switching between input details, and edit layout of cv  */}
            </div>
            <div className="preview-area">
                <div className="cv-body">
                    <div className="cv-header">
                        <div className="cv-name"></div>
                        <div className="cv-person-details">
                            <div className="person-email"></div>
                            <div className="person-number"></div>
                            <div className="person-address"></div>
                        </div>
                    </div>
                    <div className="cv-content">
                        <div className="cv-education">
                            <h3>Education</h3>
                        </div>

                        <div className="cv-experience">
                            <h3>Professional Experience</h3>
                        </div>
                    </div>
                </div>
                <div>download and full screen view</div>
            </div>
            {/*  */}

        </div>
    )
}

export default App