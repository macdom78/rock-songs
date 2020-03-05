const fetchOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};

export const fetchHelper = async ({ url, options, navigate }) => {
  try {
    const res = await fetch(url, {
      ...fetchOptions,
      ...options
    });

    if (!res.ok) throw new Error();

    const data = await res.json();
    return data;
  } catch (err) {
    navigate("/error");
    return {};
  }
};
