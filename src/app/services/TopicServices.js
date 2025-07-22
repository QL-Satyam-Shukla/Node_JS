const Topic = require("../models/Topic");

exports.createTopic = (topic_category_name) => {
  return Topic.create({ topic_category_name });
};

exports.getAllTopics = () => {
  return Topic.findAll();
};

exports.getTopicById = (topic_id) => {
  return Topic.findByPk(topic_id);
};

exports.updateTopic = (topic_category_name, topic_id) => {
  return Topic.update(
    { topic_category_name },
    {
      where: { topic_id },
    }
  );
};

exports.deleteTopic = (topic_id) => {
  return Topic.destroy({
    where: {
      topic_id,
    },
  });
};
