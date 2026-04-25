export const getLevelCount = (level: string): number => {
  const levels: Record<string, number> = {
    "Beginner": 1,
    "외운것만 씀": 2,
    "AI 있어야 함": 3,
    "간단하게 사용": 4,
    "매우 자주 사용": 5,
  };
  return levels[level] || 3;
};