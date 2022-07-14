import { View, TextInput, Button} from 'react-native';
import styles from "../Constants/Styles";

export default function AddItem(props) {

    const { textItem, onHandlerChangeItem, onHandlerAddItem } = props;

    return (
        <View style={styles.container}>
            <TextInput placeholder='Ingrese tarea' style={styles.input} value={textItem} onChangeText={onHandlerChangeItem}/>
            <Button title='Añadir'onPress={onHandlerAddItem} disabled={textItem.length < 1 ? true : false}/>
        </View>
    );
}