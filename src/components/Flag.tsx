import { Image, IImageProps } from 'native-base';

function Flag({ ...rest }: IImageProps) {
    return (
        <Image
            alt="bandeira"
            w={8}
            h={8}
            mx={3}
            {...rest}
        />
    );
}