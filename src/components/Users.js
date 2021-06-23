import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(jsonData => {
      console.log('response:', jsonData)
      setUsers(jsonData)
    })
  }

  const renderUsers = () => {
    return (users.length==0) ?
    <View><Text>Cargando...</Text></View>
    :<View>
      {users.map(user => <Text key={user.id}>{user.name}</Text>)}
    </View>
  }

  return (
    <View>
      <Text style={styles.title}>Lista de Usuarios</Text>
      {renderUsers()}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Users
