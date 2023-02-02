const getTheme = () => {
  return localStorage.getItem("selected-theme");
};

const setTheme = (theme: string) => {
  localStorage.setItem("selected-theme", theme);
};

export { getTheme, setTheme };
