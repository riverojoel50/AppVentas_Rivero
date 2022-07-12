import { FlatList } from "react-native";
import ItemList from "./ItemList";

export default List = (props) => {
    const {itemList, onHandlerModal} = props

    return (
        <FlatList data={itemList} renderItem={ data => (
            <ItemList value = {data.item.value} id = {data.item.id} onHandlerModal = {onHandlerModal}/>
          )}
          showsVerticalScrollIndicator={false} keyExtractor={item => item.id}
        />
    )
}
