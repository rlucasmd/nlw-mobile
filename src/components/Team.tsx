import { HStack } from 'native-base';
import CountryFlag from 'react-native-country-flag';
import { Input } from './Input';

interface TeamProps {
    code: string;
    position: 'left' | 'right';
    onChangeText: (nvalue: string) => void;
}


function Team({ code, position, onChangeText }: TeamProps) {
    return (
        <HStack>
            {position === 'left' && <CountryFlag isoCode={code} size={25} style={{ marginRight: 25 }} />}

            <Input
                w={10}
                h={9}
                textAlign="center"
                fontSize="xs"
                keyboardType="numeric"
                onChangeText={onChangeText}
            />

            {position === 'right' && <CountryFlag isoCode={code} size={25} style={{ marginLeft: 25 }} />}
        </HStack>
    );
}

export { Team };