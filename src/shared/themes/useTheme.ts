"use client";

import { useSyncExternalStore } from "react";
import { getCurrentTheme, resolveInitialTheme, subscribeThemeChange } from "./dom";
import type { Theme } from "./types";

const getSnapshot = (): Theme => getCurrentTheme() ?? resolveInitialTheme();

export const useTheme = (): Theme =>
  useSyncExternalStore(
    subscribeThemeChange,
    getSnapshot,
    () => "light"
  );
