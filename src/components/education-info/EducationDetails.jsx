import BasicTextFields from '../common/InputField.jsx'
import Button from '@mui/material/Button';
import { useImmer } from 'use-immer';

export default function EducationDetails({ data, updateData, changeMode, currentMode, initialData, initialDataIndex }) {
    const [fieldData, setInputData] = useImmer(
        {
            name: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
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


    //button 
    function AddButton() {
        return (<div className='button-container'>
            <Button variant="outlined" sx={{ p: 1, maxWidth: 140 }} onClick={handleClick}>

                <span className="material-symbols-outlined">
                    add_circle
                </span>
                Add Entry
            </Button>
        </div>)
    }
    function AnotherButton() {
        return (<div className='button-container'>
            <Button variant="outlined" sx={{ p: 1, maxWidth: 140 }} onClick={handleClick}>
                Cancel
            </Button>
        </div>)

    }
    function handleClick() {
        console.log(currentMode);
        if (currentMode == 'show') {
            changeMode('edit')
        }
        else changeMode('show')

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
                {currentMode == 'show' ? <AddButton /> : <AnotherButton />}
            </div>
        </div>

    )
}