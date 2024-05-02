import { red } from '@mui/material/colors';
import BasicTextFields from '../common/InputField.jsx'
import MultilineTextFields from '../common/MultiLineInputField.jsx'
import { useImmer } from 'use-immer';




export default function EducationDetails({ hickey, data, updateData, changeMode }) {
    const [fieldData, setInputData] = useImmer(
        {
            name: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: ''
        })

    let currentData = fieldData

    function updateDataList() {
        console.log(currentData);
        updateData([...data, { ...currentData }])
        changeMode('show')
    }

    function handleNameInput(e) {
        setInputData(data => { data.name = e.target.value })
    }
    function handleDegreeInput(e) {
        setInputData(data => { data.degree = e.target.value })
    }
    function handleStartDateInput(e) {
        setInputData(data => { data.startDate = e.target.value })
    }
    function handleEndDateInput(e) {
        setInputData(data => { data.endDate = e.target.value })
    }
    function handleLocationInput(e) {
        setInputData(data => { data.location = e.target.value })
    }

    return (
        <div className='add-details'>
            <BasicTextFields label={'School'} onChange={handleNameInput} />
            <BasicTextFields label={'Degree'} onChange={handleDegreeInput} />
            <div className='dates' >
                <div>
                    <BasicTextFields label={'Start Date'} onChange={handleStartDateInput} />
                </div>
                <div>
                    <BasicTextFields label={'End Date'} onChange={handleEndDateInput} />
                </div>

            </div>
            <BasicTextFields label={'Location'} onChange={handleLocationInput} />
            <div className='butto-container'>
                <button onClick={updateDataList}>save</button>
                <button>delete</button>
            </div>
        </div>

    )
}