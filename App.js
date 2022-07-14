import { View } from 'react-native';
import { useState } from 'react'
import CustomModal from './Components/Modal/Modal';
import AddTask from './Components/AddTask/AddTask';
import TaskList from './Components/TaskList/TaskList';
import styles from './Components/Constants/Styles';

export default function App( ) {
    
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandlerChangeItem = (text) => setTextItem(text);
  const onHandlerAddItem = () => {
    setItemList(currentItems => [...currentItems, { 
      id: Date.now(), 
      value: textItem, 
      completed: false}]);
    setTextItem('');
  }

  const onHandlerDeleteItem = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }
  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(!modalVisible);
  }

  const onHandlerCompleteItem = id => {
    let itemCompleted = itemList.findIndex((item) => item.id === id);
    itemList[itemCompleted].completed = true;
    setItemList([...itemList]);
    setModalVisible(!modalVisible);
  }
  return (
    <View style={styles.screen}>
      <CustomModal modalVisible={modalVisible} onHandlerDeleteItem={onHandlerDeleteItem} itemSelected={itemSelected} onHandlerCompleteItem={onHandlerCompleteItem}/> 
      <AddTask textItem={textItem} onHandlerAddItem={onHandlerAddItem} onHandlerChangeItem={onHandlerChangeItem}/>
      <TaskList itemList={itemList} onHandlerModal={onHandlerModal}/>
    </View>
  );
}