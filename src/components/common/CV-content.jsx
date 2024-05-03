import '../../styles/cv-layout1.css'

export default function CVContent({ education, experience }) {
    return (
        <div className="cv-content">
            <div className="cv-education">
                <div className='cv-subheader'><h3>Education</h3></div>
                {education.map((entry, index) => {
                    if (entry.showOnCV) {
                        return (
                            <div className="entry-container" key={index}>
                                <div className="left-details">
                                    <div>{entry.startDate} - {entry.endDate}</div>
                                    <div>{entry.location}</div>
                                </div>
                                <div className="right-details">
                                    <div className='entry-name'>{entry.name}</div>
                                    <div className='entry-degree'>{entry.degree}</div>
                                </div>
                            </div>

                        )
                    }

                })}
            </div>

            <div className="cv-experience">
                <div className='cv-subheader'><h3>Professional Experience</h3></div>
                {experience.map((entry, index) => {
                    if (entry.showOnCV) {
                        return (
                            <div className="entry-container" key={index}>
                                <div className="left-details">
                                    <div>{entry.startDate} - {entry.endDate}</div>
                                    <div>{entry.location}</div>
                                </div>
                                <div className="right-details">
                                    <div className='entry-name'>{entry.name}</div>
                                    <div className='entry-position'>{entry.position}</div>
                                    <div>{entry.description}</div>
                                </div>
                            </div>

                        )
                    }

                })}
            </div>
        </div >
    )
}