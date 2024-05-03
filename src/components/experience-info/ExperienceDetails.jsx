import BasicTextFields from '../common/InputField.jsx'
import { useImmer } from 'use-immer';

export default function ExperienceDetails({ data, updateData, changeMode }) {
    const [fieldData, setInputData] = useImmer(
        {
            name: '',
            position: '',
            startDate: '',
            endDate: '',
            location: '',
            description: '',
            showOnCV: true
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
    function handlePositionInput(e) {
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
    function handleDescriptionInput(e) {
        setInputData(data => { data.description = e.target.value })
    }

    return (
        <div className='add-details'>
            <BasicTextFields label={'Company Name'} onChange={handleNameInput} />
            <BasicTextFields label={'Position'} onChange={handlePositionInput} />
            <div className='dates' >
                <div>
                    <BasicTextFields label={'Start Date'} onChange={handleStartDateInput} />
                </div>
                <div>
                    <BasicTextFields label={'End Date'} onChange={handleEndDateInput} />
                </div>

            </div>
            <BasicTextFields label={'Location'} onChange={handleLocationInput} />
            <BasicTextFields label={'Description'} onChange={handleDescriptionInput} />
            <div className='butto-container'>
                <button onClick={updateDataList}>save</button>
                <button>delete</button>
            </div>
        </div>

    )
}