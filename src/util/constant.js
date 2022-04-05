const easing = [0.6, -.05, 0.01, 0.99]

export const stagger = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.2,
        }
    },
}

export const fadeIn = {
    initial: { y: -50, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: easing,
            duration: 0.7
        }
    },
}

export const showIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
}

export const translateX = {
    initial: { x: 0 },
    animate: { x: '-25%' },
}

export const translateY = {
    initial: { y: '100%' },
    animate: {
        y: 0,
        transition: {
            ease: easing,
            duration: 0.4
        }
    },
}