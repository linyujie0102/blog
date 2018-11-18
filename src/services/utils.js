export const isAdmin = () => {
  console.log('here2')
  if (window.sessionStorage.getItem("admin") !== null) {
    console.log('here3')
    return true;
  } else {
    console.log('here4')
    return false;
  }
  return false;
}
