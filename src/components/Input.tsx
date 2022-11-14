import { IInputProps, Input as NativeBaseInput } from 'native-base';

function Input({ ...rest }: IInputProps) {
    return (
        <NativeBaseInput
            bgColor="gray.800"
            h={14}
            px={5}
            borderColor="gray.600"
            fontSize="md"
            fontFamily="body"
            color="white"
            placeholderTextColor="gray.300"
            _focus={{
                bg: "gray.800",
                borderColor: "gray.600"
            }}
            {...rest}
        />
    );
}

export { Input };