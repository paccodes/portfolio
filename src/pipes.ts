import { focusPromptInput } from "./view";

const PIPE_COUNT = 12;
const PIPE_INCREMENT_LENGTH = 10;
const PIPE_LIFESPAN = 250;
const PIPE_REFRESH_PERIOD = 50;
const PIPE_WIDTH = 4;
const DIRECTION_CHANGE_THRESHOLD = 5;
const DIRECTION_CHANGE_SCALE = 100;
const ANSI_INDEXES = Array.from({ length: 16 }, (_, index) => index);

const Direction = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

type Direction = (typeof Direction)[keyof typeof Direction];

interface Coordinates {
  x: number;
  y: number;
}

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const getRandomColor = (): string => {
  const styles = getComputedStyle(document.documentElement);
  const index = ANSI_INDEXES[Math.floor(ANSI_INDEXES.length * Math.random())];

  return styles.getPropertyValue(`--ansi-${index}`).trim() || "#dcd7ba";
};

const getNextDirection = (currentDirection: Direction): Direction => {
  const randomNumber = DIRECTION_CHANGE_SCALE * Math.random();

  switch (currentDirection) {
    case Direction.Up:
    case Direction.Down: {
      if (randomNumber > DIRECTION_CHANGE_SCALE - DIRECTION_CHANGE_THRESHOLD) {
        return Direction.Left;
      }

      if (randomNumber < DIRECTION_CHANGE_THRESHOLD) {
        return Direction.Right;
      }

      return currentDirection;
    }

    case Direction.Left:
    case Direction.Right: {
      if (randomNumber > DIRECTION_CHANGE_SCALE - DIRECTION_CHANGE_THRESHOLD) {
        return Direction.Up;
      }

      if (randomNumber < DIRECTION_CHANGE_THRESHOLD) {
        return Direction.Down;
      }

      return currentDirection;
    }
  }
};

const wrap = (value: number, max: number): number => {
  if (value < 0) {
    return (value % max) + max;
  }

  if (value > max) {
    return value % max;
  }

  return value;
};

const getNextCoordinates = (
  coordinates: Coordinates,
  direction: Direction,
  canvas: HTMLCanvasElement,
): Coordinates => {
  let { x, y } = coordinates;

  switch (direction) {
    case Direction.Up:
      y -= PIPE_INCREMENT_LENGTH;
      break;
    case Direction.Down:
      y += PIPE_INCREMENT_LENGTH;
      break;
    case Direction.Left:
      x -= PIPE_INCREMENT_LENGTH;
      break;
    case Direction.Right:
      x += PIPE_INCREMENT_LENGTH;
      break;
  }

  return { x: wrap(x, canvas.width), y: wrap(y, canvas.height) };
};

const drawLine = (
  context: CanvasRenderingContext2D,
  from: Coordinates,
  to: Coordinates,
  color: string,
): void => {
  context.strokeStyle = color;
  context.lineWidth = PIPE_WIDTH;

  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
  context.stroke();
};

const drawLineWithWrapAround = (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  from: Coordinates,
  to: Coordinates,
  color: string,
): void => {
  const isHorizontalWrap = Math.abs(to.x - from.x) > PIPE_INCREMENT_LENGTH;
  const isVerticalWrap = Math.abs(to.y - from.y) > PIPE_INCREMENT_LENGTH;

  if (isHorizontalWrap) {
    drawLine(
      context,
      { x: Math.max(from.x, to.x), y: from.y },
      { x: canvas.width, y: to.y },
      color,
    );
    drawLine(
      context,
      { x: 0, y: from.y },
      { x: Math.min(from.x, to.x), y: to.y },
      color,
    );

    return;
  }

  if (isVerticalWrap) {
    drawLine(
      context,
      { x: from.x, y: Math.max(from.y, to.y) },
      { x: to.x, y: canvas.height },
      color,
    );
    drawLine(
      context,
      { x: from.x, y: 0 },
      { x: to.x, y: Math.min(from.y, to.y) },
      color,
    );

    return;
  }

  drawLine(context, from, to, color);
};

const drawCircle = (
  context: CanvasRenderingContext2D,
  coordinates: Coordinates,
  color: string,
): void => {
  context.fillStyle = color;

  context.beginPath();
  context.arc(coordinates.x, coordinates.y, PIPE_WIDTH / 2, 0, 2 * Math.PI);
  context.fill();
};

const drawPipe = async (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  isAlive: () => boolean,
): Promise<void> => {
  const color = getRandomColor();

  let currentCoordinates: Coordinates = {
    x: Math.floor(canvas.width * Math.random()),
    y: Math.floor(canvas.height * Math.random()),
  };
  let currentDirection = Math.floor(4 * Math.random()) as Direction;
  let counter = PIPE_LIFESPAN;

  drawCircle(context, currentCoordinates, color);

  while (counter >= 0 && isAlive()) {
    const nextCoordinates = getNextCoordinates(
      currentCoordinates,
      currentDirection,
      canvas,
    );
    const nextDirection = getNextDirection(currentDirection);

    drawLineWithWrapAround(
      context,
      canvas,
      currentCoordinates,
      nextCoordinates,
      color,
    );
    drawCircle(context, nextCoordinates, color);

    await sleep(PIPE_REFRESH_PERIOD);

    currentCoordinates = nextCoordinates;
    currentDirection = nextDirection;
    counter--;
  }
};

export const pipes = (): void => {
  if (document.querySelector(".pipes-canvas")) {
    return;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  canvas.className = "pipes-canvas";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.body.appendChild(canvas);

  let isRunning = true;

  const resize = (): void => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const dismiss = (event: Event): void => {
    event.preventDefault();
    event.stopPropagation();

    isRunning = false;

    canvas.remove();

    window.removeEventListener("resize", resize);
    window.removeEventListener("keydown", dismiss, true);
    window.removeEventListener("pointerdown", dismiss, true);

    focusPromptInput();
  };

  window.addEventListener("resize", resize);
  window.addEventListener("keydown", dismiss, true);
  window.addEventListener("pointerdown", dismiss, true);

  for (let i = 0; i < PIPE_COUNT; i++) {
    (async () => {
      while (isRunning) {
        await drawPipe(context, canvas, () => isRunning);
      }
    })();
  }
};
