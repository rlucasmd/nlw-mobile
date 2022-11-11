import { IButtonProps } from "native-base";
import { Button as ButtonNB, Text } from "native-base";


interface ButtonProps extends IButtonProps {
  title: string;
  type?: 'SECONDARY' | 'PRIMARY'
}

function Button({ title, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <ButtonNB
      {...rest}
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={type === 'SECONDARY' ? 'red.500' : 'yellow.500'}
      _pressed={{
        bg: type === 'SECONDARY' ? 'red.600' : 'yellow.600'
      }}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={type === 'SECONDARY' ? 'white' : 'black'}
      >
        {title}
      </Text>
    </ButtonNB>
  );
}

export { Button };