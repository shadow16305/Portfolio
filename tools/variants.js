export const fromBottom = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const fromTop = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
  firstElem: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.4,
      delay: 0.2,
    },
  },
  secondElem: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.4,
      delay: 0.3,
    },
  },
  thirdElem: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.4,
      delay: 0.4,
    },
  },
  fourthElem: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.4,
      delay: 0.5,
    },
  },
};

export const fromRight = {
  offscreen: {
    x: 100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
    },
  },
};

export const fromLeft = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
    },
  },
};

export const lineWidth = {
  offscreen: {
    width: 0,
  },
  onscreen: {
    width: "120px",
    transition: {
      duration: 0.6,
    },
  },
};

export const opacityVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};
