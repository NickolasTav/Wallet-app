import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "@styles/theme";

export const Button = styled(RectButton)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 16px;
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(5)}px;
    background-color: ${theme.COLORS.BLUE};
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.5);
`;

export const IconeGoogle = styled.Image`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    margin-left: ${RFValue(10)}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.POPPINSLIGHT};
`;
