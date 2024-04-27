import BasicTextFields from '../common/InputField.jsx'
import '../../styles/PersonalDetails.css'
import { PersonSample } from './personal-sample.js'

export default function PersonalDetails() {
    return (
        <div className='personal-details'>
            <h2 className='component-header'>Personal Details</h2>
            <BasicTextFields label={'Full Name'} defaultValue={PersonSample.name} />
            <BasicTextFields label={'Email'} defaultValue={PersonSample.email} />
            <BasicTextFields label={'Phone Number'} defaultValue={PersonSample.phoneNumber} />
            <BasicTextFields label={'Address'} defaultValue={PersonSample.address} />
        </div>



    )
}