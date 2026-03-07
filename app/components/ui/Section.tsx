import clsx from 'clsx';
import { HTMLAttributes, forwardRef } from 'react';

export const Section = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <section
            ref={ref}
            className={clsx(
                'py-16 md:py-24 max-w-2xl lg:max-w-4xl mx-auto px-6',
                className
            )}
            {...props}
        />
    )
);
Section.displayName = 'Section';
