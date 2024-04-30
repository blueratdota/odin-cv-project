export default function CVHeader({ person }) {
    return (
        <div className="cv-header">
            <div className="cv-name">{person.name}</div>
            <div className="cv-person-details">
                <div className="person-email">{person.email}</div>
                <div className="person-number">{person.phoneNumber}</div>
                <div className="person-address">{person.address}</div>
            </div>
        </div>
    )
}