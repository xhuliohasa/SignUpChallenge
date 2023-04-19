import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {FormikValues, useFormik} from 'formik';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import CustomInput from '../../components/Input/CustomInput';
import {signUpValidationSchema} from './validationSchema';
import {styles} from './styles';
import {actionSetSignUpData} from '../../redux/SignUp/actions/actionSetSignUpData';

const GREETING_PAGE_NAME = 'GreetingPage';

const SignupForm = () => {
  const [image, setImage] = useState<string | null>(null);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const initialFormValues = {
    firstName: '',
    password: '',
    email: '',
    website: '',
  };

  const handleSubmit = (values: FormikValues) => {
    dispatch(
      actionSetSignUpData({
        name: values.firstName,
        email: values.email,
        password: values.password,
        website: values.website,
        image,
      }),
    ),
      navigation.navigate(GREETING_PAGE_NAME);
  };

  const handleChooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 150,
      height: 200,
      cropping: true,
    }).then(chosenImage => {
      setImage(chosenImage.path);
    });
  };

  const handleOpenCamera = () => {
    ImagePicker.openCamera({
      width: 150,
      height: 200,
      cropping: true,
    }).then(chosenImage => {
      setImage(chosenImage.path);
    });
  };

  const showOptions = () => {
    Alert.alert(
      'Choose Avatar',
      'You can take a photo from camera or use an image from library',
      [
        {
          text: 'Open Camera',
          onPress: handleOpenCamera,
        },
        {text: 'Choose from library', onPress: handleChooseFromLibrary},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: signUpValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.headerStyle}>
          <Text style={styles.mainTitle}>Profile Creation</Text>
          <Text style={styles.helperText}>
            Use the form below to submit your portfolio.
          </Text>
          <Text style={styles.helperText}>
            An email and password are required
          </Text>
        </View>
        {image ? (
          <View style={styles.touchableTextContainer}>
            <Image source={{uri: image}} style={styles.imageStyle} />
          </View>
        ) : (
          <View style={styles.imageTapContainer}>
            <TouchableOpacity
              onPress={showOptions}
              style={styles.touchableTextContainer}>
              <Text style={styles.tapToUploadTextStyle}>Tap to add avatar</Text>
            </TouchableOpacity>
          </View>
        )}
        <View>
          <View style={styles.inputContainer}>
            <CustomInput
              onChangeText={formik.handleChange('firstName')}
              onBlur={formik.handleBlur('firstName')}
              value={formik.values.firstName}
              placeholder="First Name"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <Text style={styles.errorStyle}>{formik.errors.firstName}</Text>
            ) : null}
          </View>
          <View style={styles.inputContainer}>
            <CustomInput
              placeholder="Password"
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              value={formik.values.password}
              secureTextEntry={true}
            />
            {formik.touched.password && formik.errors.password ? (
              <Text style={styles.errorStyle}>{formik.errors.password}</Text>
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <CustomInput
              placeholder="Email"
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}
              keyboardType="email-address"
            />
            {formik.touched.email && formik.errors.email ? (
              <Text style={styles.errorStyle}>{formik.errors.email}</Text>
            ) : null}
          </View>
          <View style={styles.inputContainer}>
            <CustomInput
              placeholder="Website"
              onChangeText={formik.handleChange('website')}
              onBlur={formik.handleBlur('website')}
              value={formik.values.website}
            />
            {formik.touched.website && formik.errors.website ? (
              <Text style={styles.errorStyle}>{formik.errors.website}</Text>
            ) : null}
          </View>
        </View>
      </View>
      <LinearGradient
        colors={['#f07205', '#f0051c']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.submitButtonLinearGradinet}>
        <TouchableOpacity
          onPress={formik.submitForm}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyle}>Submit</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default SignupForm;
