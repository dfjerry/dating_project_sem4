import { StyleSheet } from 'react-native';

export const PRIMARY_COLOR = '#B50829';
export const SECONDARY_COLOR = '#223345';
export const WHITE_COLOR = '#ffffff';
export const BLACK_COLOR = '#242424';
export const GREY_O_COLOR = '#393e42';
export const GREY_1_COLOR = '#43484d';
export const GREY_2_COLOR = '#5e6977';
export const GREY_3_COLOR = '#86939e';
export const GREY_4_COLOR = '#bdc6cf';
export const GREY_5_COLOR = '#e1e8ee';
export const GREY_OUTLINE_COLOR = '#bbb';
export const SUCCESS_COLOR = '#52c41a';
export const ERROR_COLOR = '#ff190c';
export const WARNING_COLOR = '#faad14';

export const PERCENTAGE_COLORS = [
  '#FF0000', // red
  '#FF1100',
  '#FF2200',
  '#FF3300',
  '#FF4400',
  '#FF5500',
  '#FF6600',
  '#FF7700',
  '#FF8800',
  '#FF9900',
  '#FFAA00',
  '#FFBB00',
  '#FFCC00',
  '#FFDD00',
  '#FFEE00',
  '#FFFF00', // yellow
  '#EEFF00',
  '#DDFF00',
  '#CCFF00',
  '#BBFF00',
  '#AAFF00',
  '#99FF00',
  '#88FF00',
  '#77FF00',
  '#66FF00',
  '#55FF00',
  '#44FF00',
  '#33FF00',
  '#22FF00',
  '#00FF00', // green
];

export const commonStyles = StyleSheet.create({
  inputLabelStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: GREY_3_COLOR,
  },
  checkboxContainerStyle: {
    backgroundColor: 'white',
    borderWidth: 0,
    paddingVertical: 0,
  },
  checkboxTextStyle: {
    fontWeight: 'normal',
  },
});