import { useTheme } from 'native-base';
import { IconProps } from 'phosphor-react-native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';


interface ButtonIconProps extends TouchableOpacityProps {
    icon: React.FC<IconProps>;
}

function ButtonIcon({ icon: Icon, ...rest }: ButtonIconProps) {
    const { colors, sizes } = useTheme();
    return (
        <TouchableOpacity {...rest}>
            <Icon color={colors.gray[300]} size={sizes[6]} />
        </TouchableOpacity>
    );
}

export { ButtonIcon };