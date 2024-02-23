import React, { useState } from "react";
import { ActivityIndicator } from "react-native-paper";

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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, error, isLoading } = useAuth();

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
        {error && (
          <Spacer size="large">
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer size="large">
          {isLoading ? (
            <ActivityIndicator animating={true} />
          ) : (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => signIn(email, password)}
            >
              Login
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
