class API {
  BASE_URL = "https://projetomorro.onrender.com/api";
  TOKEN_NAME = "Authorization";

  request = (url, config) => {
    return fetch(this.BASE_URL + url, {
      ...config,
      headers: this.getHeaders(),
    }).then((r) => {
      if (r.status == 401) {
        window.location.href = "/login";
      }
      return r;
    });
  };

  getToken = () => {
    return JSON.parse(localStorage.getItem(this.TOKEN_NAME))?.token;
  };

  setToken = (token) => {
    return localStorage.setItem(this.TOKEN_NAME, token);
  };

  getHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: "Bearer " + this.getToken(),
  });
}

export class ServiceAluno extends API {
  route = "/student";

  async get() {
    let response = await this.request(this.route, { headers: this.HEADERS });
    response = await response.json();
    return response;
  }

  async post(data) {
    let response = await this.request(this.route, {
      method: "POST",
      headers: this.HEADERS,
      body: JSON.stringify(data),
    });
    response = await response.json();
    return response;
  }
}

export class ServiceCurso extends API {
  route = "/course";

  async get() {
    let response = await this.request(this.route, {
      headers: this.HEADERS,
    });
    response = await response.json();
    return response;
  }

  async post(data) {
    let response = await this.request(this.route, {
      headers: this.HEADERS,
      method: "POST",
      body: JSON.stringify(data),
    });
    response = await response.json();
    return response;
  }
}

export class ServiceMatricula extends API {
  route = "/registration";

  async get() {
    let response = await this.request(this.route, {
      headers: this.HEADERS,
    });
    response = await response.json();
    return response;
  }

  async studentsNotRegistred(courseId) {
    let response = await this.request(this.route + `/${courseId}`, {
      headers: this.HEADERS,
    });
    response = await response.json();
    return response;
  }

  async registerStudents(courseId, studentsArray) {
    let response = await this.request(this.route + `/addStudents/${courseId}`, {
      headers: this.HEADERS,
      method: "POST",
      body: JSON.stringify({ students: studentsArray }),
    });
    response = await response.json();
    return response;
  }
}

export class Auth extends API {
  async login(data) {
    console.log(data);
    let response = await fetch("http://localhost:3000/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    response = await response.json();

    if (response.token) {
      this.setToken(response.token);
      localStorage.setItem(
        this.TOKEN_NAME,
        JSON.stringify({
          token: response.token,
          email: response.user.email,
          nickname: response.user.nickname,
        })
      );
      window.location.href = "/";
    } else {
      window.location.href = "/login";
    }

    return response;
  }

  validateUser() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    return true;
  }
}
