import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import { ButtonSocialGoogle } from "@components/ButtonSocialGoogle/ButtonSocialGoogle";
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
} from "./styles";

import { ButtonSocialFacebook } from "@components/ButtonSocialFacebook/ButtonSocialFacebook";
import theme from "@styles/theme";

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Seja bem Vindo(a) {"\n"}a Wallet App</Title>
                    <Description>Entrar com Rede Sociais.</Description>
                    <ViewButton>
                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocialFacebook
                            iconName="facebook"
                            title="Facebook"
                            backgroundcolor={theme.COLORS.BLUE}
                        />
                    </ViewButton>
                </ContentHeader>
                <ContentBody></ContentBody>

                <ContentFooter></ContentFooter>
            </Container>
        </SafeAreaView>
    );
};

export { Login };
