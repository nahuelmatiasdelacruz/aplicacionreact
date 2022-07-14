import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },  
    modalView: {
        backgroundColor: Colors.mainBlue,
        width: '80%',
        height: '50%',
        borderRadius: 10,
        padding: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
    },
    modalTitle: {
        padding: 10,
        backgroundColor: Colors.mainYellow,
    },
    modalTitleText: {
        color: "black"
    },
    modalText:{
        color: Colors.whiteTimber
    }, 
    modalMessage: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButton: {
        width: "100%",
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    modalItem: {
        fontSize: 30,
        color: Colors.whiteTimber
    },
    screen: {
        marginTop: '10%',
        padding: 30,
        height: "100%",
        backgroundColor: Colors.mainBlue
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'  
    },
    input: {
        width: '80%',
        height: 50,
        borderBottomWidth: 1,
        borderColor: Colors.mainYellow,
        color: Colors.thirdBlue
    },
    item: {
        backgroundColor: Colors.secondBlue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.mainYellow,
        padding: 10,
        borderRadius: 10,
        marginTop: '10%',
        height: 60,
    },
  });

  export default styles;