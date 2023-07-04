import { StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function App() {
	return (
		<View style={styles.maincontainer}>
			<View style={styles.containera}>
				<Text style={styles.bluetext}>Hello, World!</Text>
				<Text style={styles.bluetext}>Hello, World!</Text>
				<Text style={styles.bluetext}>Hello, World!</Text>
				<Text style={styles.buttontext}>Hello, World!</Text>
				<Button title="This is a button"></Button>
			</View>
			<View style={styles.containerb}>
				<Text style={styles.bluetext}>Hello, World!</Text>
				<Text style={styles.bluetext}>Hello, World!</Text>
				<Text style={styles.bluetext}>Hello, World!</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	containera: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "grey",
	},
	containerb: {
		backgroundColor: "lightgreen",
		alignItems: "flex-end",
		paddingVertical: 20,
		paddingHorizontal: 20,
	},
	maincontainer: {
		flex: 1,
	},
	bluetext: {
		color: "blue",
	},
	buttontext: {
		color: "red",
	},
});
