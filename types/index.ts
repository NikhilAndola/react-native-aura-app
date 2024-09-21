/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageSourcePropType, KeyboardTypeOptions } from "react-native";

export type TabIconType = {
  icon: ImageSourcePropType | undefined;
  color: string;
  name: string;
  focused?: boolean;
};

export type CustomButtonType = {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
};

export type FormFieldType = {
  title: string;
  value: string;
  handleChangeText: (e: any) => void;
  otherStyles: string;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
};
