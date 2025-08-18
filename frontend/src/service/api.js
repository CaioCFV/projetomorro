class API {
  BASE_URL = "http://localhost:3000/api";
}

const TOKEN_NAME = "Authorization";

const getToken = () => {
  return JSON.parse(localStorage.getItem(TOKEN_NAME)).token;
};
const setToken = (token) => {
  return localStorage.setItem(TOKEN_NAME, token);
};

export class ServiceAluno extends API {
  route = this.BASE_URL + "/student";

  async get() {
    let response = await fetch(this.route, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    });
    response = await response.json();
    return response;
  }

  async post(data) {
    let response = await fetch(this.route, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    response = await response.json();
    return response;
  }
}

export class ServiceCurso extends API {
  route = this.BASE_URL + "/course";

  async get() {
    let response = await fetch(this.route, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    });
    response = await response.json();
    return response;
  }

  async post(data) {
    let response = await fetch(this.route, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    response = await response.json();
    return response;
  }
}

export class ServiceMatricula extends API {
  route = this.BASE_URL + "/api/registration";

  async get() {
    let response = await fetch(this.route, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    });
    response = await response.json();
    return response;
  }
}

export class Auth extends API {
  async login(data) {
    let response = await fetch("http://localhost:3000/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    response = await response.json();

    if (response.token) {
      setToken(response.token);
      localStorage.setItem(
        TOKEN_NAME,
        JSON.stringify({
          token: response.token,
          email: response.user.email,
          nickname: response.user.nickname,
        })
      );
      window.location.href = "/";
    }

    return response;
  }
  validateUser() {
    const token = getToken();
    if (!token) {
      return false;
    }
    return true;
  }
}
