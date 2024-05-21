export type Logger = {
  debug: (...args: any[]) => void;
  info: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
};

export const defaultLogger: Logger = {
  debug: (...args: any[]): void => {
    console.debug("[elk-svg]", ...args);
  },
  info: function (...args: any[]): void {
    console.info("[elk-svg]", ...args);
  },
  warn: function (...args: any[]): void {
    console.warn("[elk-svg]", ...args);
  },
  error: function (...args: any[]): void {
    console.error("[elk-svg]", ...args);
  },
};
