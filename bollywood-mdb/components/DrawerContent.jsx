import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const DrawerContent = ({ closeDrawer }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={closeDrawer}>
                    <Image source={require('../assets/x.png')} style={styles.close} />
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/img.png')} style={styles.img} />
            <TouchableOpacity style={styles.drawerItem}>
            <View style={styles.textContainer}>
                    <Image source={require('../assets/bullet.png')} style={styles.bulletIcon} />
                    <Text style={styles.text}>News & Adds</Text>
                    <Image source={require('../assets/arrow.png')} style={styles.arrowIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
            <View style={styles.textContainer}>
                    <Image source={require('../assets/bullet.png')} style={styles.bulletIcon} />
                    <Text style={styles.text}>Movies</Text>
                    <Image source={require('../assets/arrow.png')} style={styles.arrowIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
            <View style={styles.textContainer}>
                    <Image source={require('../assets/bullet.png')} style={styles.bulletIcon} />
                    <Text style={styles.text}>Videos</Text>
                    <Image source={require('../assets/arrow.png')} style={styles.arrowIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
            <View style={styles.textContainer}>
                    <Image source={require('../assets/bullet.png')} style={styles.bulletIcon} />
                    <Text style={styles.text}>Photos</Text>
                    <Image source={require('../assets/arrow.png')} style={styles.arrowIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
            <View style={styles.textContainer}>
                    <Image source={require('../assets/bullet.png')} style={styles.bulletIcon} />
                    <Text style={styles.text}>Reviews</Text>
                    <Image source={require('../assets/arrow.png')} style={styles.arrowIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
            <View style={styles.textContainer}>
                    <Image source={require('../assets/bullet.png')} style={styles.bulletIcon} />
                    <Text style={styles.text}>Box Office Report</Text>
                    <Image source={require('../assets/arrow.png')} style={styles.arrowIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
            <View style={styles.textContainer}>
                    <Image source={require('../assets/bullet.png')} style={styles.bulletIcon} />
                    <Text style={styles.text}>Web Series</Text>
                    <Image source={require('../assets/arrow.png')} style={styles.arrowIcon} />
                </View>
            </TouchableOpacity>
            <View style={styles.bottomBox}>
                <View style={styles.bottomBoxRow}>
                    <TouchableOpacity style={styles.bottomBoxIcon}>
                        <Image source={require('../assets/fb.png')} style={styles.bottomBoxIconImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomBoxIcon}>
                        <Image source={require('../assets/twitter.png')} style={styles.bottomBoxIconImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomBoxIcon}>
                        <Image source={require('../assets/WhatsApp_icon.png.webp')} style={styles.bottomBoxIconImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomBoxIcon}>
                        <Image source={require('../assets/youtube.png')} style={styles.bottomBoxIconImage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomBoxRow}>
                    <Text style={[styles.bottomBoxText, styles.whiteBorderRight]}>Privacy Policy</Text>
                    <Text style={styles.bottomBoxText}>Terms of Use</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        backgroundColor: 'red',
        gap: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    drawerItem: {
        width: '90%',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginVertical: 5,
        color: 'white',
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        padding:10
    },
    img: {
        width: 250,
        height: 100,
        alignSelf: 'center',
    },
    close: {
        width: 20,
        height: 20,
    },
    bottomBox: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 30,
        width: '90%',
        borderTopLeftRadius: 25,
    },
    bottomBoxRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomBoxIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    bottomBoxIconImage: {
        width: '100%',
        height: '100%',
    },
    bottomBoxText: {
        color: 'white',
        fontSize: 16,
        marginTop:15,
        paddingRight:10,
        paddingLeft:10
    },
    whiteBorderRight: {
        borderRightWidth: 1,
        borderColor: 'white',
      },
      textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width:"100%",
        justifyContent:"space-between"
    },
    bulletIcon: {
        width: 10,
        height: 10,
        marginRight: 10,
    },
    arrowIcon: {
        width: 10,
        height: 10,
        marginLeft: 10,
    },
});


export default DrawerContent;
