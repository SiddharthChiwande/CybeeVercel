// Firebase removed - rewriting to use LocalStorage
export const resetDatabase = async () => {
  console.log("Mock resetting database (clearing local storage)...");
  localStorage.clear();
  sessionStorage.clear();
  return {
    local_data: 1,
    session_data: 1
  };
};