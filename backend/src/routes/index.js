const {
  ModelTask
} = require("../model");

module.exports = app => {
  app.get("/", (_, response, next) => {
    return response.json({
      message: "Welcome: TASK API"
    });
  })

  app.get("/tasks", (_, response, next) => {

    ModelTask.find((error, result) => {
      if (error) {
        throw new Error("Error get /tasks")
      }

      try {
        response.status(200).send(result);
      } catch (_) {
        throw new Error("Error get /tasks")
      }
    })

  })

  app.get("/task/:id", (request, response, next) => {

    ModelTask.findOne({
      id: request.query.id
    }, (error, result) => {
      if (error) {
        throw new Error("Error get /task/id")
      }

      try {
        response.status(200).send(result);
      } catch (_) {
        throw new Error("Error get /task/id")
      }
    })

  })

  app.post("/task/user", (request, response, next) => {

    const newTask = new ModelTask({
      description: request.body.description
    })

    newTask.save();

    response.status(200).json({
      code: 200,
      message: `task created`
    });

  })

  app.delete("/task/:id", (request, response, next) => {

    ModelTask.remove({
      id: request.query.id
    }, (error) => {
      if (error) {
        throw new Error("Error delete /task/id")
      }

      try {
        response.status(200).json({
          code: 200,
          message: `user ${request.query.id} deleted`
        });
      } catch (_) {
        throw new Error("Error delete /task/id")
      }
    })

  })

  app.put("/task/:id", (request, response, next) => {

    ModelTask.updateOne({
      _id: request.query.id
    }, {
      $set: {
        done: true,
        pending: false,
      }
    }, (error) => {
      if (error) {
        throw new Error("Error put /tasks/id")
      }

      try {
        response.status(200).json({
          code: 200,
          message: `tasks ${request.query.id} updated`
        });
      } catch (_) {
        throw new Error("Error put /tasks/id /tasks")
      }
    })

  })

  app.put("/pending/:id", (request, response, next) => {

    ModelTask.updateOne({
      _id: request.query.id
    }, {
      $set: {
        pending: true,
        done: false
      }
    }, (error) => {
      if (error) {
        throw new Error("Error put /pending/id")
      }

      try {
        response.status(200).json({
          code: 200,
          message: `Error put /pending/id`
        });
      } catch (_) {
        throw new Error("Error put /pending/id")
      }
    })
  })

}