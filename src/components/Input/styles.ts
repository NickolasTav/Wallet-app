import styled, { css } from "styled-components/native";
import { TextInput, ViewProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface IContainerProps extends ViewProps {
    haserror: boolean;
    isfocused: boolean;
    isFilled?: boolean;
}

interface ITextContainerProps extends ViewProps {
    haserror: boolean;
    isfocused: boolean;
    isFilled?: boolean;
}

export const Container = styled.View`
    width: 85%;
    flex-direction: row;
    height: ${RFValue(50)}px;
    margin-bottom: ${RFValue(10)}px;
`;

export const IConContainer = styled.View<IContainerProps>`
    width: ${RFValue(50)}px;
`;
