// api calling for articles page

async function callApi() {
  let result = await fetch("");
  result = await result.json();
  console.warn(result);
  document.getElementById("userData").innerHTML = result.map((user) => {
    ``;
  });
}

callApi();
