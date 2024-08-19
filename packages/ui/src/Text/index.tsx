'use client';

import React from 'react';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
  name:
    | 'large'
    | 'large-em'
    | 'h1'
    | 'h1-em'
    | 'h2'
    | 'h2-em'
    | 'h3'
    | 'h3-em'
    | 'headline'
    | 'headline-em'
    | 'body'
    | 'body-em'
    | 'callout'
    | 'callout-em'
    | 'subheadline'
    | 'subheadline-em'
    | 'footnote'
    | 'footnote-em'
    | 'caption1'
    | 'caption1-em'
    | 'caption2'
    | 'caption2-em';
};

enum TextNames {
  'large' = 'text-large',
  'large-em' = 'text-large-em',
  'h1' = 'text-h1',
  'h1-em' = 'text-h1-em',
  'h2' = 'text-h2',
  'h2-em' = 'text-h2-em',
  'h3' = 'text-h3',
  'h3-em' = 'text-h3-em',
  'headline' = 'text-headline',
  'headline-em' = 'text-headline-em',
  'body' = 'text-body',
  'body-em' = 'text-body-em',
  'callout' = 'text-callout',
  'callout-em' = 'text-callout-em',
  'subheadline' = 'text-subheadline',
  'subheadline-em' = 'text-subheadline-em',
  'footnote' = 'text-footnote',
  'footnote-em' = 'text-footnote-em',
  'caption1' = 'text-caption1',
  'caption1-em' = 'text-caption1-em',
}

export const Text = ({ children, name, className }: Props) => {
  return <span className={clsx(TextNames[name], className)}>{children}</span>;
};
