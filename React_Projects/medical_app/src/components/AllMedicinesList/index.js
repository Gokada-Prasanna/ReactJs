import MedicineCard from '../MedicineCard'

import './index.css'

function AllMedicinesList(props){
return(
    <ul className="medicines-list-container">
        {props.medicinesList.map((medicine) => <MedicineCard medicineDetails={medicine} key={medicine.id} />)}
    </ul>
)
}

export default AllMedicinesList