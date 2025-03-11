import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    ScheConfirmButton: {
        position: 'absolute', 
        bottom: 0,            
        left: 0,              
        right: 0,             
        alignItems: 'center', 
        backgroundColor: '#9dd694',
        padding: 15,
        borderRadius: 10,
        margin: 10,           
    },
    ScheConfirmButtonText: {
        color: '#064e3b',
        fontSize: 16,
        fontWeight: 'bold',
    },
    SignButton:{
        backgroundColor: '#9dd694',
        borderColor: '#064e3b',
        borderWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginTop: 20,
    },
    SignButtonT:{
    color: '#064e3b',
    fontSize: 16,
    fontWeight: 'bold',

    },
    subscribeButton: {
        alignSelf: "flex-end",
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: "#d1fae5",
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#22d3ee",
      },
      subscribeButtonText: {
        color: "#064e3b",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "600",
      },
});