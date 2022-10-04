module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define('questions', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        text: { type: Sequelize.STRING },
        order: { type: Sequelize.INTEGER },
        type: { type: Sequelize.STRING },
        required: { type: Sequelize.BOOLEAN },
        multichoice: { type: Sequelize.BOOLEAN },
  
    })
    return Question
  }