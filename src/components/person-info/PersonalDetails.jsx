import BasicTextFields from '../common/InputField.jsx'
import '../../styles/PersonalDetails.css'

export default function PersonalDetails({ person, changeData }) {

    function handleNameChange(e) {
        // console.log(e.target.value);
        changeData(data => { data.name = e.target.value })
    }

    function handleEmailChange(e) {
        changeData(data => { data.email = e.target.value })
    }

    function handlePhoneNumberChange(e) {
        changeData(data => { data.phoneNumber = e.target.value })
    }

    function handleAddressChange(e) {
        changeData(data => { data.address = e.target.value })
    }

    return (

        <div className='personal-details'>
            <h2 className='component-header'>Personal Details</h2>
            <BasicTextFields label={'Full Name'} defaultValue={person.name} onChange={handleNameChange} />
            <BasicTextFields label={'Email'} defaultValue={person.email} onChange={handleEmailChange} />
            <BasicTextFields label={'Phone Number'} defaultValue={person.phoneNumber} onChange={handlePhoneNumberChange} />
            <BasicTextFields label={'Address'} defaultValue={person.address} onChange={handleAddressChange} />
        </div>



    )
}

