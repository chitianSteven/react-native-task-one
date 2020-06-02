import React, { Component } from 'react';
import {
  ViewStyle,
} from 'react-native'
import SvgUri from 'react-native-svg-uri';
import svgs from '../../assets/svgs';

export default class Svg extends Component {
  render() {
    const {
      iocn,
      color,
      size,
      style,
    } = this.props;
    let svgXmlData = svgs[this.props.icon];

    if (!svgXmlData) {
      let err_msg = `no such "${this.props.icon}" icon been found`;
      throw new Error(err_msg);
    }
    return (
      <SvgUri
        width={size}
        height={size}
        svgXmlData={svgXmlData}
        fill={color}
        style={style}
      />
    )
  }
}