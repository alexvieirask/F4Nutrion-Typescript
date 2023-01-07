import { Text, SafeAreaView } from "react-native";
import { styles } from "./styles-home";

export default function Home(){
    return(
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.title}>Home</Text>
        </SafeAreaView>
    )
}