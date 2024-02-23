import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackGround,
  AccountCover,
  AccountContainer,
  AuthButton,
  AnimationWrapper,
  LottieChicken,
} from "../components/account.styles";
import { Title } from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackGround>
      <AccountCover />
      <AnimationWrapper>
        <LottieChicken
          autoPlay
          loop
          resizeMode="contain"
          source={require("../../../../assets/Polite Chicky.json")}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          LOGIN
        </AuthButton>
        <Spacer position="top" size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            REGISTER
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackGround>
  );
};
