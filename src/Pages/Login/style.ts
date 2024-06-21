import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1768B2",
    alignItems: "center",
    justifyContent: "center",
  },
  caixa: {
    width: "80%",
    height: "45%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 45,
  },
  TextInput: {
    borderWidth: 2,
    borderLeftColor: "#fff",
    borderTopColor: "#fff",
    borderRightColor: "#fff",
    borderBottomColor: "#1768B2",
    width: "70%",
    height: 50,
    backgroundColor: "#FFF",
    fontSize: 20,
  },
  button: {
    backgroundColor:"#EBEBEB",
    width:"80%",
    height:"15%",
    alignItems:'center',
    justifyContent:'center'
},
buttonText:{
    fontSize:20,
    color:"#868686",
    fontWeight:'500'
},
forgor:{
    color:"#1768B2",
    fontSize:18,
    textDecorationLine:"underline"
}
});
