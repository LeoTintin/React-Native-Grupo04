import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "#1768B2",
  },
  card: {
    flex: 1,
    width: "95%",
    backgroundColor: "#ffffff90",
    borderRadius: 10,
    paddingBottom: 20,
  },
  cardTextTitulo: {
    color: "#021627",
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#021627",
  },

  cardUser: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
  },
  cardText: {
    color: "#021627",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom:5
  },
  cardTextLine: {
    color: "#fff",
    backgroundColor: '#1768B2',
    borderRadius: 25,
    padding: 5,
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
    marginRight: 15,
  },

  headerTextName: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
    marginBottom: -5,
  },
  headerTextEmail: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
  },

  icon: {
    marginTop: 20,
    marginRight: 20,
  },
});
