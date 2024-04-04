import { Text, View } from "react-native";

const UnorderedList = ({data}) => {
  return data.map((item, index) => (
    <View key={index} style={{ marginLeft: 12, marginBottom: 4 }}>
      <Text>- {item}</Text>
    </View>
  ))
};

export default UnorderedList;
