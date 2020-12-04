import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableWithoutFeedback } from 'react-native'
import {BottomPopup} from './src/ButtonPopup'

const popupList = [
  {
    id: 1,
    name: "North Indian"
  },
  {
    id: 2,
    name: "South Indian"
  },
  {
    id: 3,
    name: "Sweets"
  },
  {
    id: 4,
    name: "Bengali"
  },
  {
    id: 5,
    name: "Italian"
  },
  {
    id: 6,
    name: "Chinese"
  },
  
]

const App = () => {

  const [filter, setFilter] = useState("none")

  let popupRef = React.createRef()

  const changeFilter = (name) => {
    setFilter(name);
    popupRef.close()
  }

  const onShowPopup = () => {
    popupRef.show()
  }
 
  const onClosePopup = () => {
    popupRef.close()
  }

  return (
    <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
      <TouchableWithoutFeedback onPress = {onShowPopup}>
      <Text style={{fontSize: 40}}>Popup</Text>
      </TouchableWithoutFeedback>
      <BottomPopup
            title="Demo Popup"
            ref={(target) => popupRef = target}
            onTouchOutside={onClosePopup}
            data={popupList}
            changeFilter={changeFilter}
      />
      <View>
        <Text style={{fontSize: 25}}>
          Filter Type: 
        </Text>
        <Text style={{fontSize: 25}}>
          {filter}
        </Text>
      </View>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
