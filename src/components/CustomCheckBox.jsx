import _ from 'lodash';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { PRIMARY_COLOR, commonStyles } from '../utils/style';
import { TOUCHABLE_HIT_SLOP } from '../utils/constans';
import { execute } from '../utils/common';

export default function CustomCheckBox(props) {

  const onPress = () => {
    let newChecked = props.checked ? 0 : 1;
    if (props.boolean) {
      newChecked = Boolean(newChecked);
    }
    return execute(props, 'onPress', newChecked);
  }

  return (
    <TouchableOpacity
      hitSlop={TOUCHABLE_HIT_SLOP}
      onPress={onPress}
    >
      <View pointerEvents='none'>
        <CheckBox
          {...props}
          checkedColor={props.checkedColor || PRIMARY_COLOR}
          textStyle={{ ...commonStyles.checkboxTextStyle, ...props.textStyle }}
          containerStyle={{ ...commonStyles.checkboxContainerStyle, ...props.containerStyle }}
        />
      </View>
    </TouchableOpacity>
  )
}