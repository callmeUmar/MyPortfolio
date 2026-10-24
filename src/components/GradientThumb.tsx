import React from 'react';

type Props = {
  palette: [string, string, string];
  className?: string;
  /** view-transition-name, so the thumbnail can morph into the project hero. */
  transitionName?: string;
};

export default function GradientThumb({ palette, className, transitionName }: Props) {
  const [a, b, c] = palette;
  const style = {
    backgroundImage: [
      `radial-gradient(circle at 20% 30%, ${a} 0%, transparent 60%)`,
      `radial-gradient(circle at 80% 20%, ${b} 0%, transparent 55%)`,
      `radial-gradient(circle at 60% 80%, ${c} 0%, transparent 60%)`,
      `linear-gradient(135deg, ${a}, ${c})`,
    ].join(', '),
    viewTransitionName: transitionName,
  } as React.CSSProperties;
  return <span className={`gradient-thumb${className ? ` ${className}` : ''}`} style={style} aria-hidden="true" />;
}
