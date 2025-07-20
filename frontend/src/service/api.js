// import auth from "./auth";
// import setLoading from "../util/setLoading";
// import { generateTask } from "../util/generateTasks";

class API {
  BASE_URL = "http://localhost:3000";
}

export class ServiceAluno extends API {
  route = this.BASE_URL + "/alunos";

  async get() {
    let response = await fetch(this.route, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    return response;
  }

  async post(data) {
    let response = await fetch(this.route, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    response = await response.json();
    return response;
  }
}

export class ServiceCurso extends API {
  route = this.BASE_URL + "/cursos";

  async get() {
    let response = await fetch(this.route, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    return response;
  }

  async post(data) {
    let response = await fetch(this.route, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    response = await response.json();
    return response;
  }
}

export class ServiceMatricula extends API {
  route = this.BASE_URL + "/matriculas";

  async get() {
    let response = await fetch(this.route, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    return response;
  }
}

// export const getCompany = async () => {
//   let reqtext = "";

//   const response = await axios
//     .get("/company", { headers: { pipe_token: auth.getToken() } })
//     .catch((error) => {
//       if (error.response.status === 401) {
//         auth.logout();
//       }
//       reqtext = error.response.data.error;
//     });

//   if (!response) {
//     return alert(reqtext);
//   }

//   return response;
// };

// export const createCompany = async ({ ...params }) => {
//   let reqtext = "";

//   const response = await axios
//     .post("/company", params, { headers: { pipe_token: auth.getToken() } })
//     .then(() => {
//       reqtext = "Empresa criada com sucesso";
//     })
//     .catch((error) => {
//       if (error.response.status === 401) {
//         auth.logout();
//       }
//       reqtext = error.response.data.error;
//     });

//   if (!response) {
//     return alert(reqtext);
//   }

//   return alert(reqtext);

//   // return alert('Company created sucessful')
// };

/***************************************************************************
 ****************************** API PROSPECT ********************************
 ****************************************************************************/

// export const getProspect = async () => {
//   let reqtext = "";

//   const response = await axios
//     .get("/prospect", { headers: { pipe_token: auth.getToken() } })
//     .catch((error) => {
//       if (error.response.status === 401) {
//         auth.logout();
//       }
//       reqtext = error.response.data.error;
//     });

//   if (!response) {
//     return alert(reqtext);
//   }

//   return response;
// };

// export const createProspect = async ({ ...params }) => {
//   let reqtext = "";

//   const response = await axios
//     .post("/prospect", params, { headers: { pipe_token: auth.getToken() } })
//     .catch((error) => {
//       if (error.response.status === 401) {
//         auth.logout();
//       }
//       reqtext = error.response.data.error;
//     });

//   if (!response) {
//     return alert(reqtext);
//   }

//   return alert("Prospect criado com sucesso");
// };

// export const importProspect = async (data) => {
//   const formdata = new FormData();
//   formdata.append("file", data[0]);
//   const response = await axios.post("/prospect/import", formdata, {
//     headers: {
//       pipe_token: auth.getToken(),
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   return response;
// };

/***************************************************************************
 ****************************** API CAMPAIGN ********************************
 ****************************************************************************/

// export const getCampaign = async () => {
//   let reqtext = "";

//   const response = await axios
//     .get("/campaign", { headers: { pipe_token: auth.getToken() } })
//     .catch((error) => {
//       if (error.response.status === 401) {
//         auth.logout();
//       }
//       reqtext = error.response.data.error;
//     });

//   if (!response) {
//     return alert(reqtext);
//   }

//   return response;
// };

// export const createCampaign = async (campaign) => {
//   setLoading("Criando campanha..");
//   let reqtext = "";

//   if (!campaign.id_prospect[0]) {
//     setLoading();
//     return alert("adicione prospects a campanha");
//   }

//   const response = await axios
//     .post(`/campaign/${campaign.id_prospect[0].id}/prospect`, campaign, {
//       headers: { pipe_token: auth.getToken() },
//     })
//     .catch((error) => {
//       if (error.response.status === 401) {
//         auth.logout();
//       }
//       reqtext = error.response.data.error;
//     });

//   if (!response) {
//     return alert(reqtext);
//   }

//   if (!response) {
//     return alert("Ocorreu um erro e a campanha não foi criada");
//   }

//   campaign.id_prospect.shift();

//   campaign.id_prospect.map(async (item) => {
//     await axios.post(`/campaign/${item.id}/prospect`, campaign, {
//       headers: { pipe_token: auth.getToken() },
//     });
//   });

//   const tasks = await generateTask(campaign, response.data.campaign.id);

//   await tasks.map(async (item) => {
//     await createTask(item);
//   });

//   setLoading();
//   return;
// };

/***************************************************************************
 ****************************** API TASK ************************************
 ****************************************************************************/
// export const createTask = async (task) => {
//   setLoading("Criando tasks");
//   const response = await axios
//     .post(`/task`, task, { headers: { pipe_token: auth.getToken() } })
//     .catch((err) => console.log(err));
//   setLoading();

//   return response;
// };

// export const getTasks = async () => {
//   const response = await axios
//     .get(`/task`, { headers: { pipe_token: auth.getToken() } })
//     .catch((err) => console.log(err));

//   return response;
// };

// export const getTaskType = async () => {
//   const response = await axios
//     .get("/task_type", { headers: { pipe_token: auth.getToken() } })
//     .catch(function (err) {
//       if (!response) {
//         auth.logout();
//       }
//     });

//   return response;
// };
