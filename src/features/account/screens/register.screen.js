import React, { useState } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import {
  AccountBackGround,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { useAuth } from "../../../services/auth/auth.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { signUp, error, isLoading } = useAuth();

  return (
    <AccountBackGround>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repeated password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer size="large">
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => signUp(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          BACK
        </AuthButton>
      </Spacer>
    </AccountBackGround>
  );
};
