export async function getQuestions() {
  console.log("getQuestions()");
  try {
    const data = await fetch("http://localhost:3001/questions");
    return await data.json();
  } catch (err) {
    await handleResponse(err);
  }
}

export async function getQuestion(id) {
  console.log("getQuestion(id)", id);
  try {
    const data = await fetch(`http://localhost:3001/questions/?page=${id}`);
    return await data.json();
  } catch (err) {
    await handleResponse(err);
  }
}

export async function createQuestion(values) {
  console.log("createQuestion", values);
  return fetch(`http://localhost:3001/questions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      observation: values.observation,
      date: values.date,
    }),
  }).then(await handleResponseCreate);
}

async function handleResponse(response) {
  if (response.ok) {
    console.log(response.json());
    return response.json();
  } else {
    const textError = await response.text();
    throw new Error(JSON.parse(textError).error);
  }
}

async function handleResponseCreate(response) {
  if (response.ok) {
    console.log(response);
  } else {
    const textError = await response.text();
    throw new Error(JSON.parse(textError).error);
  }
}
