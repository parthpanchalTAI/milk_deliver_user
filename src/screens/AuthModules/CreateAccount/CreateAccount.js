import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../assets/colors/colors';
import AnimatedInput from '../../../components/AnimatedInput';

const CreateAccount = () => {

  return (
    <View style={styles.container}>
      {/* <Animated.View style={{ ...styles.box, width }} />
        <Button onPress={handlePress} title="Click me" /> */}
      <AnimatedInput
        placeholder={'Email'}
        containerStyle={{
          backgroundColor: "white",
          borderColor: colors.Gray_Border,
          borderWidth: 1,
          borderRadius: 4,
          width: '90%'
        }}
        keyboardType='email-address'
        autoCapitalize='none'
        height={52}
        mpContainer={{ mt: 50 }}
        mpInput={{ ph: 10 }}
        inputStyle={{ color: colors.black }}
        textSize={14}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CreateAccount;
