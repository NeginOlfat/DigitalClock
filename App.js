import React,{useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

const App = () =>{

  const [currentDay,setCurrentDay]=useState(null);
  const [currentTime,setCurrenTime]=useState(null);
  const weekDay =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const getCurrentDate= () =>{
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let second = new Date().getSeconds();
    let am_pm = 'AM';

    if ( hour < 10 )
      hour ='0'+hour

    if ( minutes < 10)
      minutes='0'+minutes
      
    if ( second < 10 )
      second='0'+second

    if ( new Date().getHours > 12 )
      am_pm='PM'

    setCurrenTime( hour + ':' + minutes + ':' + second + ' ' + am_pm );
    
    weekDay.map( ( item, key) => {
      if (key == new Date().getDay()) 
        {
          setCurrentDay(item);
        }
    })
    
  }

  useEffect( () => {
    const Interal=setInterval( () => {getCurrentDate()},1000);
    return () => {
      clearInterval(Interal)
    }
  })

  return(
    <View style={container}>
      <Text style={day}>{currentDay}</Text>
      <Text style={time}>{currentTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#383838',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS == 'ios')? 20 : 0
  },
  day: {
    fontSize: 50,
    color: '#e59400',
  },
  time: {
    fontSize: 50,
    color: '#e59400',
  }
});

const {container, day, time} = styles;

export default App;
