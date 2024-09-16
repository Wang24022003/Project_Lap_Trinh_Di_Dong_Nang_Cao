import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.samsungGalaxyA145g1, styles.Bia21Position]}/>
      <Image
        style={[styles.Bia21, styles.Bia21Position]}
        source={require('./../assets/bia.png')} 
      />
      <Image
        style={[styles.homeChild]}
        source={require('./assets/rectangle5.png')} 
      />
      <Text style={styles.searchText}>Search............</Text>
      <Image
        style={[styles.addAPhotoIcon, styles.iconLayout]}
        source={require('./assets/add-a-photo.png')} 
      />
      <Image
        style={[styles.searchIcon, styles.iconLayout]}
        source={require('./assets/search.png')}
      />
      <Image
        style={[styles.discoverTuneIcon, styles.iconLayout]}
        source={require('./assets/discover-tune.png')}
      />

      <Image
        style={[styles.homeItem, styles.homeChildPosition]}
        source={require('./assets/ellipse-2.png')}
      />
      <Image
        style={[styles.homeInner, styles.homeChildPosition]}
        source={require('./assets/ellipse-3.png')}
      />
      
      
      <Image
        style={styles.n1Icon}
        source={require('./assets/131321493-345922260232932-7824312325167757271-n-1.png')}
      />
      <Text style={[styles.lMinhQuang, styles.textText]}>Lê Minh Quang</Text>
      <Text style={[styles.text, styles.textText]}>21110279</Text>
      <Text style={styles.xinCho}>Xin chào,</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: "rgba(0, 255, 71, 0.08)",
    height: 810,
    width: 410,
    position: "absolute",
    left: 0,
    top: 0,
  },
  samsungGalaxyA145g1: {
    backgroundColor: "rgba(0, 255, 71, 0.08)",
    height: 810,
    width:410
  },
  Bia21Position: {
    width: 410,
    left: 0,
    top: 0,
    position: "absolute",
  },
  Bia21: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: 222,
  },
  homeChild: {
    top: 203,
    left: 80,
    borderRadius: 30,
    width: 240,
    height: 37,
    position: "absolute",
  },
  searchText: {
    position: "absolute",
    top: 208,
    left: 128,
    fontSize: 15,
    color: "#787878",
    width: 105,
    height: 22,
    textAlign: "left",
    fontFamily: "Roboto",
  },
  addAPhotoIcon: {
    left: 260,
    top: 210,
    width: 24,
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  searchIcon: {
    left: 90,
    top: 210,
    width: 24,
  },
  discoverTuneIcon: {
    top: 218,
    left: 295,
  },
  homeItem: {
    marginLeft: -9,
  },
  homeChildPosition: {
    height: 12,
    width: 12,
    left: "50%",
    top: "50%",
    marginTop: -222,
    position: "absolute",
  },
  n1Icon: {
    top: 71,
    left: 241,
    borderRadius: 40,
    width: 120,
    height: 120,
    position: "absolute",
  },
  lMinhQuang: {
    top: 107,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Roboto",
    height: 33,
    textShadowColor: "rgba(0, 0, 0, 0.85)",
  },
  textText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    color: "#FFFFFF",
    width: 177,
    left: 40,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    top: 134,
    fontSize: 12,
    height: 17,
    textShadowColor: "rgba(0, 0, 0, 0.91)",
    fontFamily: "Roboto",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    color: "#FFFFFF",
  },
  xinCho: {
    top: 253,
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#014f0e",
    height: 47,
    width: 177,
    left: 40,
    textAlign: "left",
    position: "absolute",
  },
});

export default HomeScreen;
