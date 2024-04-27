import { red } from '@mui/material/colors';
import BasicTextFields from '../common/InputField.jsx'
import MultilineTextFields from '../common/MultiLineInputField.jsx'

export default function EducationDetails() {
    return (
        <div className='add-details'>
            <BasicTextFields label={'School'} />
            <BasicTextFields label={'Degree'} />
            <div className='dates' >
                <div>
                    <BasicTextFields label={'Start Date'} />
                </div>
                <div>
                    <BasicTextFields label={'End Date'} />
                </div>

            </div>
            <BasicTextFields label={'Location'} />
        </div>

    )
}