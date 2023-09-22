import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../../assets/images';
import { vs } from '../../../utility/ResponsiveStyle';
import styles from './Styles';

const Intro2 = () => {
    return (
        <>
            <Image source={images.intro2}
                style={styles.introScreenImg} />

            <View style={styles.bottom_view}>
                <Text style={styles.into_title}>
                    Find best product for you
                </Text>

                <View>
                    <Text style={[styles.lorem_text, { marginTop: vs(15) }]}>
                        Discover service near you lorem ipsum dolor
                    </Text>
                    <Text style={styles.lorem_text}>
                        is amet near you lorem.
                    </Text>
                </View>
            </View>
        </>
    );
};

export default Intro2;
