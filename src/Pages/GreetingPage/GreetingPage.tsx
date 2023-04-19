import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';
import {selectorSignUpData} from '../../redux/SignUp/selector';

const GreetingPage = () => {
  const signUpData = useSelector(selectorSignUpData);
  const {name, email, image, website} = signUpData;

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.mainTitle}>Hello, {name}</Text>
          <Text style={styles.subtitle}>
            Your super-awesome portfolio has been successfully submitted! The
            preview below is what the community will see!
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.imageStyle} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.linkStyle}>{website}</Text>
          <Text style={styles.nameEmailStyle}>{name}</Text>
          <Text style={styles.nameEmailStyle}>{email}</Text>
        </View>
      </View>
      <LinearGradient
        colors={['#f07205', '#f0051c']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.singInLinearGradient}>
        <TouchableOpacity
          onPress={() => console.log('wala')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyle}>Sign In</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default GreetingPage;
