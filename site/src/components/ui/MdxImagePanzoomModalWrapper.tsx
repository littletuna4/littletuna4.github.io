'use client';

/**
 * FUNCTIONAL REQUIREMENTS:
 * - Wrap Next.js Image for MDX; click opens pan/zoom modal with same image
 * - Optional disablePanzoomModal to render as plain Image (opt-out)
 * - Hover affordance (cursor, subtle ring) so users know it is clickable
 * - Modal uses PanzoomModalRoot + PanzoomSurface; image in modal fills the modal (object-contain)
 * - Accepts same props as next/image; passes them through to inline Image
 */

import Image, { type StaticImageData } from 'next/image';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { useDisablePanzoomModals } from '@/components/contexts/DisablePanzoomModalsContext';
import { PanzoomModalRoot } from '@/components/ui/PanzoomModalRoot';
import { PanzoomSurface } from '@/components/ui/PanzoomSurface';

type NextImageProps = ComponentProps<typeof Image>;

function getImageSrc(src: NextImageProps['src']): string {
  if (typeof src === 'string') return src;
  return (src as StaticImageData).src;
}

export interface MdxImagePanzoomModalWrapperProps extends NextImageProps {
  disablePanzoomModal?: boolean;
}

export function MdxImagePanzoomModalWrapper({
  disablePanzoomModal = false,
  alt,
  className = '',
  ...imageProps
}: MdxImagePanzoomModalWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contextDisable = useDisablePanzoomModals();

  if (disablePanzoomModal || contextDisable) {
    return <Image alt={alt} className={className} {...imageProps} />;
  }

  const imageSrc = getImageSrc(imageProps.src);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="block w-fit max-w-full rounded-lg shadow-sm outline-none ring-0 transition focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={alt ? `Enlarge: ${alt}` : 'Enlarge image'}
      >
        <Image
          alt={alt}
          className={`max-w-full h-auto cursor-zoom-in rounded-lg ${className}`}
          {...imageProps}
        />
      </button>
      <PanzoomModalRoot
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ariaLabel={alt ?? 'Enlarge image'}
        scrollOnly={false}
      >
        <PanzoomSurface className="w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={alt ?? ''}
            className="w-full h-full object-contain select-none"
            draggable={false}
          />
        </PanzoomSurface>
      </PanzoomModalRoot>
    </>
  );
}

/** Use in MDX when a specific image should not open the pan/zoom modal. Same props as next/image. */
export function MdxInlineImageWithoutPanzoomModal(props: NextImageProps) {
  return <Image {...props} />;
}
