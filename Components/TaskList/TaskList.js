import { FlatList, TouchableOpacity, Text } from 'react-native';
import styles from '../Constants/Styles';

export default function List(props) {
    const { itemList, onHandlerModal } = props
    return (
        <FlatList data={itemList} renderItem={data => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
                    <Text style={{textDecorationLine: data.item.completed ? 'line-through' : null}}>{data.item.value}</Text>
                </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
        />
    )
}