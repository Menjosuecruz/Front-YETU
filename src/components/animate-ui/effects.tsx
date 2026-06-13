import { Children, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, type SpringOptions } from 'motion/react';

type Direction = 'up' | 'down' | 'left' | 'right';

type EffectProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type FadeProps = EffectProps & {
  initialOpacity?: number;
  opacity?: number;
};

type SlideProps = EffectProps & {
  direction?: Direction;
  offset?: number;
};

type ShineProps = EffectProps & {
  color?: string;
  deg?: number;
  duration?: number;
  loop?: boolean;
  loopDelay?: number;
  opacity?: number;
};

type MagneticProps = EffectProps & {
  disableOnTouch?: boolean;
  onlyOnHover?: boolean;
  range?: number;
  springOptions?: SpringOptions;
  strength?: number;
};

const getOffset = (direction: Direction, offset: number) => {
  if (direction === 'left') return { x: -offset, y: 0 };
  if (direction === 'right') return { x: offset, y: 0 };
  if (direction === 'down') return { x: 0, y: offset };
  return { x: 0, y: -offset };
};

export function Fade({ children, className, delay = 0, initialOpacity = 0, opacity = 1 }: FadeProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: initialOpacity }}
      animate={{ opacity }}
      transition={{ delay, duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Slide({
  children,
  className,
  delay = 0,
  direction = 'up',
  offset = 22,
}: SlideProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getOffset(direction, offset), filter: 'blur(6px)' }}
      animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      transition={{ delay, duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Slides({
  children,
  className,
  delay = 0,
  direction = 'up',
  offset = 16,
}: SlideProps) {
  return (
    <>
      {Children.map(children, (child, index) => (
        <Slide
          className={className}
          delay={delay + index * 0.06}
          direction={direction}
          offset={offset}
        >
          {child}
        </Slide>
      ))}
    </>
  );
}

export function Shine({
  children,
  className,
  color = '#ffffff',
  deg = -15,
  duration = 1200,
  loop = false,
  loopDelay = 0,
  opacity = 0.34,
}: ShineProps) {
  return (
    <span
      className={`animate-ui-shine${loop ? ' is-looping' : ''}${className ? ` ${className}` : ''}`}
      style={
        {
          '--shine-color': color,
          '--shine-deg': `${deg}deg`,
          '--shine-duration': `${duration}ms`,
          '--shine-loop-delay': `${loopDelay}ms`,
          '--shine-opacity': opacity,
        } as CSSProperties
      }
    >
      {children}
    </span>
  );
}

export function Magnetic({
  children,
  className,
  disableOnTouch = true,
  onlyOnHover = true,
  range = 120,
  springOptions = { stiffness: 100, damping: 10, mass: 0.5 },
  strength = 0.5,
}: MagneticProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  return (
    <motion.span
      className={className ?? 'animate-ui-magnetic'}
      style={{ x: springX, y: springY }}
      onPointerMove={(event) => {
        if (disableOnTouch && event.pointerType === 'touch') return;

        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        const distance = Math.hypot(deltaX, deltaY);

        if (onlyOnHover && distance > range) return;

        x.set(deltaX * strength);
        y.set(deltaY * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children as ReactElement}
    </motion.span>
  );
}
