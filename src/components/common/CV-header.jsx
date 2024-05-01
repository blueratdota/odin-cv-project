
export default function CVHeader({ person }) {
    return (
        <div className="cv-header">
            <div className="cv-name">{person.name}</div>
            <div className="cv-person-details">
                <div className="person-email">
                    <span className="material-symbols-outlined">mail</span>
                    {person.email}</div>
                <div className="person-number">
                    <span className="material-symbols-outlined">call</span>
                    {person.phoneNumber}
                </div>
                <div className="person-address">
                    <span className="material-symbols-outlined">location_on</span>
                    {person.address}</div>
            </div>
        </div>
    )
}