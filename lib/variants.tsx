
export const fadeIn =( duration: string, delay: number) => {
  return {
    hidden: {
      y: duration === 'up' ? 40 : duration === 'down' ? -40 : 0,
      opacity: 0,
      x: duration === 'left' ? 40 : duration === 'right' ? -40 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      }
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  }
}

export default fadeIn