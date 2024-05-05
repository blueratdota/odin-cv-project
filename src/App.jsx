import { useState } from "react";
import { useImmer } from 'use-immer';

import './styles/App.css'
// import components here
import PersonalDetails from "./components/person-info/PersonalDetails";
import EducationDetails from "./components/education-info/EducationDetails.jsx";
import ExperienceDetails from "./components/experience-info/ExperienceDetails.jsx";
import AccordionUsage from "./components/common/DropDownTemplate.jsx";
// import AccordionUsageReal from "./components/common/DropDown.jsx";
import ListDividers from "./components/common/Entries.jsx";
//cv display exports
import CVHeader from "./components/common/CV-header.jsx";
// data
import { EducationSample } from "./components/education-info/education-sample.js";
import { ExperienceSample } from "./components/experience-info/experience-sample.js";
import { PersonSample } from "./components/person-info/personal-sample.js";
import CVContent from "./components/common/CV-content.jsx";
const expData = ExperienceSample
// import uniqid
// import example data


function App() {
    const [personData, setPersonData] = useImmer({ ...PersonSample })
    const [educData, setEducData] = useImmer(EducationSample)
    const [expData, setExpData] = useImmer(ExperienceSample)
    //accordion UI
    const [educMode, setEducMode] = useState('show')
    const [expMode, setExpMode] = useState('show')
    const [toUpdate, setToUpdate] = useState('')



    return (
        <div className="app">
            <div className="edit-area">
                <div className="header">Odin Project: CV Generator</div>
                <div className="detail-container">
                    <PersonalDetails person={personData} changeData={setPersonData} />

                    <AccordionUsage title={'Education'} changeMode={setEducMode} currentMode={educMode}>
                        {educMode == 'show' ?
                            <ListDividers data={educData} updateData={setEducData} changeMode={setEducMode} currentMode={educMode} type={'educ'} /> :
                            <EducationDetails data={educData} updateData={setEducData} changeMode={setEducMode} currentMode={educMode} />}

                    </AccordionUsage>

                    <AccordionUsage title={'Experience'} changeMode={setExpMode} currentMode={expMode}>
                        {expMode == 'show' ?
                            <ListDividers data={expData} updateData={setExpData} changeMode={setExpMode} currentMode={expMode} type={'exp'} /> :
                            <ExperienceDetails data={expData} updateData={setExpData} changeMode={setExpMode} currentMode={expMode} />}

                    </AccordionUsage>

                </div>
                <div>footer </div> {/*make this a component, switching between input details, and edit layout of cv  */}
            </div>
            <div className="preview-area">
                <div className="cv-body">
                    <CVHeader person={personData} />
                    <CVContent education={educData} experience={expData} />
                </div>
                <div>download and full screen view</div>
            </div>
            {/*  */}

        </div>
    )
}

export default App