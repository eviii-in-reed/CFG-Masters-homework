import { Button, StyleSheet, Text, View, Image } from 'react-native';


export default function NewsDisplay({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders</Text>
      <Image 
        style={styles.image}
        src={'https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg'}
      />
      <Text style={styles.text}>
        Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, but now we also have some nice and crisp renders of their front and back!
      </Text>
      <Text style={styles.text}>
        Yes, while there have indeed been lots of visuals showcasing the Pixel 7 and Pixel 7 Pro’s back panel, there haven’t been many good ones that show the phones’ screens. Now, thanks to Ishan Agarwal, we know that both phones will come with a very similar design when it comes to their front sides.
      </Text>
      <Text style={styles.text}>
        Looking at the renders, we find the familiar by now centered punch-hole cutout for the selfie camera, much like on the Pixel 6 and Pixel 6 Pro. The good news is that the regular Pixel 7 seems to have significantly reduced bezels, which gives it a much more modern and slick look, fit for a 2022 flagship. The bezels on the Pixel 7 Pro may have ever so slightly been reduced as well, but it is hard to tell because of the lighting in these renders.
      </Text>
      <Text style={styles.text}>
        One less noticeable difference that some might miss is that the volume and power buttons on the right side of the Pixel 7 Pro have moved to a lower position than the predecessor, probably to make them more easily reachable.
      </Text>
      <Text style={styles.text}>
        Of course, the most obvious change of them all is with the one part that makes the latest Pixels iconic in their design — the camera visor. As most of you already know from Google’s teaser back in May, this time around, most of the visor will be covered in a chrome-like material, with cutouts for the triple camera system on the Pixel 7 Pro and the dual cameras on the Pixel 7.
      </Text>
      <Button title='Click to return home page' color="#ffdd80" onPress={() => navigation.navigate("home")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 15,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width: 60,
      margin: 10
    },
    text:{
      margin: 20,
      fontFamily: 'Times New Roman',

    },
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
