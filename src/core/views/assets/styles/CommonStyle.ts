import { StyleSheet } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension'

export const common = StyleSheet.create({
  container: {
    flex: 1
  },
  movieItem: {
    flex: 1,
    width: width(48)
  },
  body: {
    flex: 1,
    backgroundColor: 'white'
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  paddingContainer: {
    flex: 1,
    padding: 6
  },
  spaceBetweenContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  containerRowDirection: {
    flex: 1,
    flexDirection: 'row'
  },
  marginLeft_5: {
    marginLeft: 5
  },
  circle_image_small: {
    height: 40,
    borderRadius: 20,
    width: 40
  },
  circle_image_large: {
    height: 100,
    borderRadius: 50,
    width: 100
  }
})
