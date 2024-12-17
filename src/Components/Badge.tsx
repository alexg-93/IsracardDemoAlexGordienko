import React from 'react';
import { StyleSheet, View , Text, StyleProp, ViewStyle } from 'react-native';

interface IBadgeProps {
    text: string | number | undefined;
    backgroundColor?: string;
    textColor?: string;
    display?: boolean;
    badgeContainer?: StyleProp<ViewStyle>;
}

const Badge = ({text='',display=true,textColor='white',badgeContainer={}}:IBadgeProps) => {
    return (
     display && (
    <View style={[styles.badgeContainer,badgeContainer]}>
        <Text style={[styles.textStyle,{color:textColor}]}>{text}</Text>
     </View>)
    );
}

const styles = StyleSheet.create({
    badgeContainer: {
        width:120,
        backgroundColor:'#352F44',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    textStyle: {
        fontSize:11,
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
    }
})

export default Badge;