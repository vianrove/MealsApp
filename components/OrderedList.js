import { Text, View } from "react-native";

const OrderedList = ({data}) => {
  return data.map((item, index) => (
    <View key={index} style={{ marginLeft: 12, marginBottom: 4 }}>
      <Text>{index+1}. {item}</Text>
    </View>
  ))
};

export default OrderedList;
