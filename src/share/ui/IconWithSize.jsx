import React from 'react';

export default function IconWithSize({ src, alt, width = 11, height = 15 }) {
    return (
        <img
            src={src}
            alt={alt}
            className={`w-[${width}px] h-[${height}px]`}
        />
    );
}
