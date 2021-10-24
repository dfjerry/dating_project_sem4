import React, {useEffect, useState} from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';

const Card = props => {
  const {user} = props;
  const [image, setImage] = useState("https://assets.i-hr.vn/static/d/user/images/20211020/210-b88339c0-3182-11ec-b893-3fd1a6c0f5ff.jpg");
  useEffect(() => {
    if (user?.photos?.length > 0){
      setImage(user['photos'][0].link ? user['photos'][0].link : "https://assets.i-hr.vn/static/d/user/images/20211020/210-b88339c0-3182-11ec-b893-3fd1a6c0f5ff.jpg");
    }
  }, [user]);
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{user?.first_name} {user?.last_name}</Text>
          <Text style={styles.bio}>{user?.bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fefefe',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});

export default Card;
