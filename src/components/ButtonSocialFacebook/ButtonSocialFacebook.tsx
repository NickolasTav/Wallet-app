import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { RectButtonProps } from "react-native-gesture-handler";
import { Button, IconeFacebook, Title } from "./style";

interface Props extends RectButtonProps {
    title: string;
    iconName: React.ComponentProps<typeof Fontisto>["name"];
    backgroundcolor?: string;
}

const ButtonSocialFacebook: React.FC<Props> = ({
    title,
    iconName,
    backgroundcolor,
    ...rest
}) => {
    return (
        <Button {...rest} style={{ backgroundColor: backgroundcolor }}>
            <IconeFacebook name={iconName} />
            <Title>{title}</Title>
        </Button>
    );
};

export { ButtonSocialFacebook };
