import * as React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import * as Styles from '../assets/styles'

export class CircleImage extends React.Component<any> {
  render() {
    const style = this.props.sizeMode === 'small' ? Styles.common.circle_image_small
      : Styles.common.circle_image_large;

    return (
         <TouchableOpacity onPress={this.props.onPress}>
           <Image
             {...this.props}
             style={[Styles.common.marginLeft_5, style]}
             source={this.props.source} />
         </TouchableOpacity>
    );
  }
}
