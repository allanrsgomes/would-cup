import { Center, Text, Icon } from 'native-base';
import { Fontisto } from '@expo/vector-icons'
import { Button } from '../components/Button';
//import Logo from '../assets/logo.svg' Ajustar o LOGO depois 


export function Signin() {
    return (
        <Center flex={1} bgColor="gray.900">
            {/*<Logo width={212} height={212} /> */}

            <Button 
                title="ENTRAR COM GOOGLE"
                leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
                type="SECONDARY"
            />

        </Center>
    )
}