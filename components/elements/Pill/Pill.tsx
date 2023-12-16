import React, {useState} from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {Categories, Level, IconicPill} from './common';
import styles from './styles';

type PillGroupProps = {
  /**
   * array of pill data
   * @type (Category | Level)[]
   * @required
   */
  data: (Categories | Level | IconicPill)[];
  /**
   * index for current active pill
   * @type (idx: number) => void;
   * @optional
   */
  activeIndex?: (idx: number) => void;
  /**
   * custom style when pill active
   * @type ViewStyle
   * @optional
   */
  activeStyle?: ViewStyle;
  /**
   * custom style when pill inactive
   * @type ViewStyle
   * @optional
   */
  inactiveStyle?: ViewStyle;
  /**
   * custom style for pill text when active
   * @type ViewStyle
   * @optional
   */
  activeTextStyle?: TextStyle;
  /**
   * custom style for pill text when inactive
   * @type ViewStyle
   * @optional
   */
  inactiveTextStyle?: TextStyle;
};

export const PillGroup: React.FC<PillGroupProps> = ({
  // data,
  activeIndex = () => {},
  activeStyle = {},
  inactiveStyle = {},
  activeTextStyle = {},
  inactiveTextStyle = {},
}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <React.Fragment>
      {/* {data.map(({id, ...rest}, idx) => ( */}
        <Pill
          isChecked={activeIdx === 1}
          // isChecked={activeIdx === idx}
          // key={id || idx}
          // id={idx}
          // {...rest}
          radio
          activeStyle={activeStyle}
          inactiveStyle={inactiveStyle}
          activeTextStyle={activeTextStyle}
          inactiveTextStyle={inactiveTextStyle}
          // isSelected={pillId => {
          //   setActiveIdx(pillId as number);
          //   activeIndex(pillId as number);
          // }}
        />
      ))}
    </React.Fragment>
  );
};

type Props = (Categories | Level) & {
  activeStyle?: ViewStyle;
  inactiveStyle?: ViewStyle;
  activeTextStyle?: TextStyle;
  inactiveTextStyle?: TextStyle;
  isSelected?: (id: string | number, selected?: boolean) => void;
  isChecked?: boolean;
  /**
   * pill act as radio button?
   * @type boolean
   * @optional
   */
  radio?: boolean;
  icon?: any;
};

const Pill = ({
  id,
  name,
  icon,
  isSelected = () => {},
  activeStyle,
  inactiveStyle,
  activeTextStyle,
  inactiveTextStyle,
  isChecked,
  radio,
}: Props) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      style={
        selected || isChecked
          ? [styles.pillActive, activeStyle]
          : [styles.pillInactive, inactiveStyle]
      }
      onPress={() => {
        if (!radio) {
          isSelected(id as string, !selected);
          setSelected(!selected);
        }
        isSelected(id as number, !selected);
      }}>
      <Text
        style={
          selected || isChecked
            ? [styles.nameActive, activeTextStyle]
            : [styles.name, inactiveTextStyle]
        }
        numberOfLines={1}>
        {icon && icon}
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Pill;
