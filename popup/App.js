import React from 'react'
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
  
]

const App = () => {

  let popupRef = React.createRef()

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
      />
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})