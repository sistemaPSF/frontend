export function getMedicoLocalStorage() {
    const json = localStorage.getItem('u');
    if (!json) {
      return null;
    }
  
    const medico = JSON.parse(json);
  
    return medico ?? null;
}