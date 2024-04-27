import BasicTextFields from '../common/InputField.jsx'



export default function ExperienceDetails() {
    return (
        <div className='add-details'>
            <BasicTextFields label={'Company Name'} />
            <BasicTextFields label={'Position'} />
            <div className='dates' >
                <div>
                    <BasicTextFields label={'Start Date'} />
                </div>
                <div>
                    <BasicTextFields label={'End Date'} />
                </div>

            </div>
            <BasicTextFields label={'Location'} />
            <BasicTextFields label={'Description'} />
        </div>

    )
}