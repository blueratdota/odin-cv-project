export default function CVContent({ education }) {
    return (
        <div className="cv-content">
            <div className="cv-education">
                <h3>Education</h3>
                {education.map((entry, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <div>{entry.startDate} - {entry.endDate}</div>
                                <div>{entry.location}</div>
                            </div>
                            <div>
                                <div>{entry.name}</div>
                                <div>{entry.degree}</div>
                            </div>
                        </div>

                    )
                })}
            </div>

            <div className="cv-experience">
                <h3>Professional Experience</h3>
            </div>
        </div>
    )
}