import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import KindOfFood from '../components/KindOfFood'

const KindOfFoodPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipos de comida</Text>

      <KindOfFood title='Frutas'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  }
});

export default KindOfFoodPage
