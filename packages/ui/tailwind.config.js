/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    fontSize: {
      large: [
        'var(--text-large-fontSize)',
        {
          lineHeight: 'var(--text-large-lineHeight)',
          fontWeight: 'var(--text-large-normal)',
        },
      ],
      'large-em': [
        'var(--text-large-fontSize)',
        {
          lineHeight: 'var(--text-large-lineHeight)',
          fontWeight: 'var(--text-large-emphasized)',
        },
      ],
      h1: [
        'var(--text-h1-fontSize)',
        {
          lineHeight: 'var(--text-h1-lineHeight)',
          fontWeight: 'var(--text-h1-normal)',
        },
      ],
      'h1-em': [
        'var(--text-h1-fontSize)',
        {
          lineHeight: 'var(--text-h1-lineHeight)',
          fontWeight: 'var(--text-h1-emphasized)',
        },
      ],
      h2: [
        'var(--text-h2-fontSize)',
        {
          lineHeight: 'var(--text-h2-lineHeight)',
          fontWeight: 'var(--text-h2-normal)',
        },
      ],
      'h2-em': [
        'var(--text-h2-fontSize)',
        {
          lineHeight: 'var(--text-h2-lineHeight)',
          fontWeight: 'var(--text-h2-emphasized)',
        },
      ],
      h3: [
        'var(--text-h3-fontSize)',
        {
          lineHeight: 'var(--text-h3-lineHeight)',
          fontWeight: 'var(--text-h3-normal)',
        },
      ],
      'h3-em': [
        'var(--text-h3-fontSize)',
        {
          lineHeight: 'var(--text-h3-lineHeight)',
          fontWeight: 'var(--text-h3-emphasized)',
        },
      ],
      headline: [
        'var(--text-headline-fontSize)',
        {
          lineHeight: 'var(--text-headline-lineHeight)',
          fontWeight: 'var(--text-headline-normal)',
        },
      ],
      'headline-em': [
        'var(--text-headline-fontSize)',
        {
          lineHeight: 'var(--text-headline-lineHeight)',
          fontWeight: 'var(--text-headline-emphasized)',
        },
      ],
      body: [
        'var(--text-body-fontSize)',
        {
          lineHeight: 'var(--text-body-lineHeight)',
          fontWeight: 'var(--text-body-normal)',
        },
      ],
      'body-em': [
        'var(--text-body-fontSize)',
        {
          lineHeight: 'var(--text-body-lineHeight)',
          fontWeight: 'var(--text-body-emphasized)',
        },
      ],
      callout: [
        'var(--text-callout-fontSize)',
        {
          lineHeight: 'var(--text-callout-lineHeight)',
          fontWeight: 'var(--text-callout-normal)',
        },
      ],
      'callout-em': [
        'var(--text-callout-fontSize)',
        {
          lineHeight: 'var(--text-callout-lineHeight)',
          fontWeight: 'var(--text-callout-emphasized)',
        },
      ],
      subheadline: [
        'var(--text-subheadline-fontSize)',
        {
          lineHeight: 'var(--text-subheadline-lineHeight)',
          fontWeight: 'var(--text-subheadline-normal)',
        },
      ],
      'subheadline-em': [
        'var(--text-subheadline-fontSize)',
        {
          lineHeight: 'var(--text-subheadline-lineHeight)',
          fontWeight: 'var(--text-subheadline-emphasized)',
        },
      ],
      footnote: [
        'var(--text-footnote-fontSize)',
        {
          lineHeight: 'var(--text-footnote-lineHeight)',
          fontWeight: 'var(--text-footnote-normal)',
        },
      ],
      'footnote-em': [
        'var(--text-footnote-fontSize)',
        {
          lineHeight: 'var(--text-footnote-lineHeight)',
          fontWeight: 'var(--text-footnote-emphasized)',
        },
      ],
      caption1: [
        'var(--text-caption1-fontSize)',
        {
          lineHeight: 'var(--text-caption1-lineHeight)',
          fontWeight: 'var(--text-caption1-normal)',
        },
      ],
      'caption1-em': [
        'var(--text-caption1-fontSize)',
        {
          lineHeight: 'var(--text-caption1-lineHeight)',
          fontWeight: 'var(--text-caption1-emphasized)',
        },
      ],
      caption2: [
        'var(--text-caption2-fontSize)',
        {
          lineHeight: 'var(--text-caption2-lineHeight)',
          fontWeight: 'var(--text-caption2-normal)',
        },
      ],
      'caption2-em': [
        'var(--text-caption2-fontSize)',
        {
          lineHeight: 'var(--text-caption2-lineHeight)',
          fontWeight: 'var(--text-caption2-emphasized)',
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
