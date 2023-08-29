export function loadersErrorHandler(error: any) {
  if(error.code === "ERR_NETWORK") {
    alert("Woops, server isn`t online");
    console.log(error);
  } else {
    alert("Internal Server Error ((");
    console.log(error);
  }
}