const models = require("../models");
async function renderQuestionPaper(req, res, next){
    let examId = req.params.examId;


    let exam = await models.exam.findOne({
        where: {
            examId: examId
        }
    });

    res.send(exam);
}

module.exports = {
    renderQuestionPaper
}
