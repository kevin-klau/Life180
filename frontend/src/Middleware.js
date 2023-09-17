const baseURL = "http://127.0.0.1:5000/";

async function getUserBalance(publicKey) {
  try {
    const response = await fetch(baseURL + "user/" + publicKey, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Issues");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

async function getContract(publicKey, privateKey) {
  try {
    const response = await fetch(
      baseURL + "contract/" + publicKey + "/" + privateKey,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

async function postContract(publicKey, privateKey) {
  try {
    const response = await fetch(
      baseURL + "contract/" + publicKey + "/" + privateKey,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

async function putContract(publicKey, privateKey) {
  try {
    const response = await fetch(
      baseURL + "contract/" + publicKey + "/" + privateKey,
      {
        method: "PUT",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export { getUserBalance, getContract, postContract, putContract };