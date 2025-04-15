import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';

interface ResponsiveImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  lowQualitySrc?: string;
  sizes?: string;
}

export function ResponsiveImage({
  src,
  fallbackSrc,
  lowQualitySrc,
  alt,
  sizes = '100vw',
  ...props
}: ResponsiveImageProps) {
  const [imgSrc, setImgSrc] = useState(lowQualitySrc || src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setImgSrc(lowQualitySrc || src);
    setIsLoaded(false);
  }, [src, lowQualitySrc]);

  // Generate responsive image URLs
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc) return '';
    
    const { name, ext } = parsePath(baseSrc);
    
    // Check if we're using modern formats
    const isModernFormat = ext === '.avif' || ext === '.webp';
    
    // If already using a modern format, use responsive variants
    if (isModernFormat) {
      return `
        ${name}-sm${ext} 640w,
        ${name}-md${ext} 1024w,
        ${name}${ext} 1920w
      `;
    }
    
    // Otherwise, try to use AVIF or WebP
    const avifSrc = `${name}.avif`;
    const webpSrc = `${name}.webp`;
    
    // Try to use AVIF first, then WebP, then original
    return `
      ${avifSrc} 1920w,
      ${webpSrc} 1920w,
      ${baseSrc} 1920w
    `;
  };

  // Parse path to get name and extension
  const parsePath = (path: string) => {
    const lastDot = path.lastIndexOf('.');
    const lastSlash = path.lastIndexOf('/');
    
    if (lastDot === -1) {
      return { name: path, ext: '' };
    }
    
    const name = path.substring(0, lastDot);
    const ext = path.substring(lastDot);
    
    return { name, ext };
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      sizes={sizes}
      onLoad={() => {
        setIsLoaded(true);
        if (imgSrc === lowQualitySrc) {
          // Switch to high quality image after low quality is loaded
          setImgSrc(src);
        }
      }}
      onError={() => {
        if (imgSrc !== fallbackSrc && fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
      className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      {...props}
    />
  );
}
