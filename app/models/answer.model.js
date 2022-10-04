module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define('answers', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        text: { type: Sequelize.STRING },
        other: { type: Sequelize.BOOLEAN },
        questionId: { type: Sequelize.INTEGER },
    })
    return Question
  }