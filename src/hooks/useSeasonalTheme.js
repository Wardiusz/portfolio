/**
 * - 'christmas' → December 20+ or January 1–10
 * - 'newyear'   → January 1–7
 * - 'easter'    → April
 * - 'default'   → everything else
 */
export function useSeasonalTheme() {
  const now = new Date();
  const month = now.getMonth();
  const date = now.getDate();
  const day = now.getDay();

  let theme = 'default';

  if (month === 0) {
    if (day >= 1 && day <= 7) {
      theme = 'newyear';
    } else {
      theme = 'christmas';
    }
  } else if (month === 3) {
    theme = 'easter';
  } else if (month === 11) {
    theme = 'christmas';
  }

  const greetingWords = {
    default: ['Hello!', 'Witaj!', '¡Hola!', 'こんにちは！'],
    christmas: ['Merry Christmas!', 'Wesołych świąt!', '¡Feliz navidad!', 'ハッピークリスマス！'],
    easter: ['Happy Easter!', 'Wesołego Alleluja!', '¡Felices Pascuas!', 'イースター、おめでとう！'],
    newyear: ['Happy New Year!', 'Szczęśliwego Nowego Roku!', '¡Feliz año nuevo!', 'あけましておめでとう！'],
  };

  return {
    theme,
    words: greetingWords[theme],
    showSnow: theme === 'christmas' || theme === 'newyear',
    showFireworks: theme === 'newyear',
    showEaster: theme === 'easter',
    showMatrix: theme === 'default',
  };
}
