import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Food from './Food'


const KindOfFood = ({title}) => {

  const fruits = ['Manzana', 'Pera', 'Platano', 'Mango']

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {
        fruits.map((fruit, index) => <Food key={index} name={fruit} />)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default KindOfFood
