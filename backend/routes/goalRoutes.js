module.exports = app => {
    var router = require("express").Router();
    const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalController')

    // router.get("/", getGoals)
    // router.put("/", setGoals)
    // router.post("/:id", updateGoals)
    // router.delete("/:id", deleteGoals)

    router.route("/").get(getGoals).put(setGoals)
    router.route("/:id").delete(deleteGoals).post(updateGoals)

    app.use("/api/goals", router)
}