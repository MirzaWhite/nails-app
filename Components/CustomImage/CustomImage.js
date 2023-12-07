import {useState} from "react";
import Image from "next/image";

const CustomImage = ({alt,fallbackImg,...props}) => {
    const [src, setSrc,] = useState(props.src);

    return(
        <Image
            {...props}
            src={src}
            alt={alt} // To fix lint warning
            onError={() => setSrc(fallbackImg)}
        />
    )
}

export default CustomImage;