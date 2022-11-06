import { Center, Text, Icon } from 'native-base'
import { Fontisto } from '@expo/vector-icons'

import { useAuth } from '../hooks/useAuth'

import { Button } from '../components/Button'
import Logo from '../assets/logo.svg'


export function Signin() {
    const { signIn, user } = useAuth()

    return (
        <Center flex={1} bgColor="gray.900" p={7}>
            <Logo width={212} height={212} /> 

            <Button
                type="SECONDARY"
                title="ENTRAR COM GOOGLE"
                leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
                mt={12}
                onPress={signIn}
            />

            <Text color="white" textAlign="center" mt={4}>
                Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
            </Text>

        </Center>
    )
}