import { Modal, View, Text, Button } from 'react-native'
import styles from "../Constants/Styles";

export default function CustomModal(props) {

    const { modalVisible, itemSelected, onHandlerDeleteItem, onHandlerCompleteItem } = props

    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.modal}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                        <Text style={styles.modalTitleText}>Atención</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={styles.modalText}>¿Qué acción desea realizar?</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={styles.modalItem}>{itemSelected.value}</Text>
                    </View>
                    <View style={styles.modalButton}>
                        <Button onPress={() => onHandlerDeleteItem(itemSelected.id)} title='Borrar'/>
                        <Button onPress={() => onHandlerCompleteItem(itemSelected.id)} title='Completar'/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}