import BasicTextFields from '../common/InputField.jsx'
import { useImmer } from 'use-immer';

export default function EditExpDetails({ data, updateData, changeMode, initialData, updateMode }) {
    const [fieldData, setInputData] = useImmer(
        initialData)

    let currentData = fieldData


    function updateDataList() {
        console.log(currentData,);
        if (JSON.stringify(initialData) == JSON.stringify(fieldData)) {
            console.log('do nothing');
            updateMode(false)
        }
        else {
            console.log('update')
            updateData(
                data.map((entry) => {
                    if (entry.name == initialData.name) {
                        return { ...fieldData }
                    }
                    else return entry
                })
            )
            updateMode(false)
        }

    }

    function deleteButton() {
        updateData(
            data.filter((entry) => {
                return entry !== initialData
            })
        )
        updateMode(false)
    }


    function cancelButton() {
        updateMode(false)
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
            <BasicTextFields label={'Company Name'} onChange={handleNameInput} defaultValue={currentData.name} />
            <BasicTextFields label={'Position'} onChange={handlePositionInput} defaultValue={currentData.position} />
            <div className='dates' >
                <div>
                    <BasicTextFields label={'Start Date'} onChange={handleStartDateInput} defaultValue={currentData.startDate} />
                </div>
                <div>
                    <BasicTextFields label={'End Date'} onChange={handleEndDateInput} defaultValue={currentData.endDate} />
                </div>

            </div>
            <BasicTextFields label={'Location'} onChange={handleLocationInput} defaultValue={currentData.location} />
            <BasicTextFields label={'Description'} onChange={handleDescriptionInput} defaultValue={currentData.description} />
            <div className='butto-container'>
                <button onClick={updateDataList}>Update</button>
                <button onClick={cancelButton}>Cancel</button>{/*done*/}
                <button onClick={deleteButton}>Delete</button>
            </div>
        </div>

    )
}