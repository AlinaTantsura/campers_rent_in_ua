import { EquipmentButtonsBox } from "../EquipmentButtonsBox/EquipmentButtonsBox";
import { FormSubmit } from "../Form/FormSubmit";
import { VehicleDetails } from "../VehicleDetails/VehicleDetails";
import styles from "./Features.module.css"

const Features = () => {
    return (
        <div className={styles.features_box}>
            <div>
                <EquipmentButtonsBox />
                <VehicleDetails />
            </div>
            <FormSubmit />
        </div>
    )
}

export default Features;