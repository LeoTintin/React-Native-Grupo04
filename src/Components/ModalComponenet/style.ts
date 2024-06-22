import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: "#1768B2",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    backgroundColor: "#ffffff99",
    width: "95%",
    height: '40%',
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#1768B2",
    borderWidth: 5,
    borderRadius: 10,
    padding: 20,
  },

  title: {
    color: "#021627",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 20,
  },

  button: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1768B2",
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  titleButton: {
    color: "#fff",
    fontSize: 18,
  },
});
