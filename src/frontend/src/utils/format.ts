export const formatDateForBDpattern = (date: any) => {

  const ano = date.getFullYear();
  const mes = String(date.getMonth() + 1).padStart(2, '0'); // Mês é baseado em 0
  const dia = String(date.getDate()).padStart(2, '0');
  const horas = String(date.getHours()).padStart(2, '0');
  const minutos = String(date.getMinutes()).padStart(2, '0');
  const segundos = String(date.getSeconds()).padStart(2, '0');

  const dataSQLite = `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
  
  return dataSQLite
}


export const formatDataToShow = (date: string) => {

  const [data, _] = date.split(' '); 

  const [ano, mes, dia] = data.split('-');

  return `${dia}/${mes}/${ano}`;
};