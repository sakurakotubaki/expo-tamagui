import { TamaguiProvider, YStack, XStack, Text, Button, Input, Form } from 'tamagui'
import { useState } from 'react'
import config from './tamagui.config'
import { Lock, Mail } from '@tamagui/lucide-icons'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Login attempt with:', { email, password })
    // ここにログイン処理を実装
  }

  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <YStack f={1} bg="white" padding="$4" gap="$4">
        <YStack gap="$4" marginTop="$10">
          <Text color="black" fontSize="$8" fontWeight="bold" textAlign="center">
            Welcome Back
          </Text>
          <Text color="$gray11" fontSize="$4" textAlign="center">
            Please sign in to continue
          </Text>
        </YStack>

        <Form onSubmit={handleLogin} marginTop="$8">
          <YStack gap="$4" maxWidth={400} width="100%" alignSelf="center">
            <XStack gap="$2" alignItems="center" backgroundColor="$gray3" borderRadius="$4" padding="$2">
              <Mail size={20} color="$gray11" />
              <Input
                flex={1}
                size="$4"
                borderWidth={0}
                backgroundColor="transparent"
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </XStack>

            <XStack gap="$2" alignItems="center" backgroundColor="$gray3" borderRadius="$4" padding="$2">
              <Lock size={20} color="$gray11" />
              <Input
                flex={1}
                size="$4"
                borderWidth={0}
                backgroundColor="transparent"
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </XStack>

            <Button
              theme="blue"
              size="$4"
              marginTop="$2"
              onPress={handleLogin}
              backgroundColor="$blue10"
              pressStyle={{ opacity: 0.8 }}
            >
              Sign In
            </Button>

            <XStack justifyContent="center" marginTop="$2">
              <Text color="$gray11">
                Forgot password?
              </Text>
            </XStack>
          </YStack>
        </Form>
      </YStack>
    </TamaguiProvider>
  );
}
