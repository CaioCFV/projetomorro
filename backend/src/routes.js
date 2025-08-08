const { Router } = require("express");
const routes = Router();
//const authRouter = require("./middlewares/autentication");
//const multer = require('multer')
//const multerConfig = require('./config/multer')

//authentication middleware
//routes.use(authRouter);

//ROUTES FOR STUDENT
const StudentController = require("./controllers/StudentController");
routes.post("/student", StudentController.store);
routes.get("/student", StudentController.index);

//ROUTES FOR COURSE
const CourseController = require("./controllers/CourseController");
routes.post("/course", CourseController.store);
routes.get("/course", CourseController.index);

//ROUTES FOR REGISTRATION
const RegistrationController = require("./controllers/RegistrationController");
routes.post("/registration", RegistrationController.store);
routes.get("/registration", RegistrationController.index);

//ROUTES FOR PROSPECTS
//const ProspectController = require("./controllers/ProspectController");
//routes.post("/prospect", ProspectController.store);
// routes.post(
//   "/prospect/import",
//   multer().single("file"),
//   ProspectController.import
// );
//routes.get("/prospect", ProspectController.index);

//ROUTES FOR CAMPAIGN
// const CampaignController = require("./controllers/CampaignController");
// routes.post("/campaign/:user_id/prospect", CampaignController.store);
// routes.get("/campaign", CampaignController.index);

//ROUTES FOR TASKS
// const TaskController = require("./controllers/TaskController");
// routes.post("/task", TaskController.store);
// routes.get("/task", TaskController.index);
// routes.get("/task_type", TaskController.getTaskType);

//ROUTER FOR EMAILS
// const EmailsController = require("./controllers/EmailsController");
// routes.post("/email", EmailsController.store);

module.exports = routes;

// Cada método que sobrou tem uma responsabilidade:

// index: Listar todos registros;
// show: Exibir um registro;
// store: Criar novo registro;
// update: Alterar um registro;
// destroy: Remover um registro;
