import React from "react";
import { Animated, FlatList } from "react-native";

import AppointmentCard from "./AppointmentCard.js";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const cards = [
  {
    type: 'Cards.Card1',
    id: '0'
  },
  {
    type: 'Cards.Card2',
    id:'1'
  },
  {
    type: 'Cards.Card3',
    id:'2'
  },
  {
    type: 'Cards.Card4',
    id:'3'
  },
  {
    type: 'Cards.Card5',
    id: '4'
  },
  {
    type: 'Cards.Card6',
    id:'5'
  },
];

const Appointment = () => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={false}
      data={cards}
      renderItem={({ index, item: { type } }) => (
        <AppointmentCard {...{ index, y, type }} />
      )}
      keyExtractor={(item) => item.id}
      {...{ onScroll }}
    />
  );
};

export default Appointment;