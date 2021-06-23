import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'

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
    return <View>
      {users.map(user => <Text key={user.id}>{user.name}</Text>)}
    </View>
  }

  return (
    <View>
      <Text>Lista de Usuarios</Text>
      {renderUsers()}
    </View>
  )
}

export default Users
