import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { LoadProducts } from './store/action';

export default () => {
  // const [data, setData] = useState([]);
  const data = useSelector(st => st)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://gorest.co.in/public-api/users').then((res) => res.json()).then((res) => {
      dispatch(LoadProducts(res.data));
    }).catch((e) => { console.log(e) })
  }, [])

  return <SafeAreaView
    style={{
      flex: 1
    }}>
    <Text>Sample List</Text>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        console.log(item)
        return <View>
          <View><Text>{item.name}</Text></View>
          <View><Text>{item.email}</Text></View>
        </View>
      }} />
  </SafeAreaView>
}