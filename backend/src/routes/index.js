module.exports = app => {
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
        done: true
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

}