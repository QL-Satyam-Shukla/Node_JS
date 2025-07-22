const responder = require("../../utils/reponder");
const TopicServices = require("../services/TopicServices");

exports.createTopic = async (request, response, next) => {
  try {
    const topic = await TopicServices.createTopic(
      request.body.topic_category_name
    );
    if (!topic) {
      return responder(response, false, "TOPIC_CREATE_ERROR", {}, 400);
    }
    return responder(response, true, "TOPIC_CREATED", topic);
  } catch (err) {
    return responder(response, false, "FAILURE", {}, 500);
  }
};

exports.getAllTopic = async (request, response, next) => {
  try {
    const topic = await TopicServices.getAllTopics();
    if (!topic) {
      return responder(response, false, "ERROR_TOPIC_FETCH", {}, 400);
    }
    return responder(response, true, "TOPIC_FETCH", { topic });
  } catch (err) {
    return responder(response, false, "FAILURE", {}, 500);
  }
};

exports.getTopic = async (request, response, next) => {
  try {
    const istopisExis = await TopicServices.getTopicById(
      request.params.topic_id
    );
    if (!istopisExis) {
      return responder(response, false, "TOPIC_NOT_PRESENT", {}, 400);
    }
    const topic = await TopicServices.getTopicById(request.params.topic_id);
    if (!topic) {
      return responder(response, false, "ERROR_TOPIC_FETCH", {}, 400);
    }
    return responder(response, true, "TOPIC_FETCH", { topic });
  } catch (err) {
    return responder(response, false, "FAILURE", {}, 500);
  }
};

exports.deleteTopic = async (request, response, next) => {
  try {
    const istopisExis = await TopicServices.getTopicById(
      request.params.topic_id
    );
    if (!istopisExis) {
      return responder(response, false, "TOPIC_NOT_PRESENT", {}, 400);
    }
    const topic = await TopicServices.deleteTopic(request.params.topic_id);
    if (!topic) {
      return responder(response, false, "TOPIC_DELETE_ERROR", {}, 400);
    }
    return responder(response, true, "TOPIC_DELETE", { topic });
  } catch (err) {
    return responder(response, false, "FAILURE", {}, 500);
  }
};

exports.updateTopic = async (request, response, next) => {
  try {
    const istopisExis = await TopicServices.getTopicById(
      request.params.topic_id
    );
    if (!istopisExis) {
      return responder(response, false, "TOPIC_NOT_PRESENT", {}, 400);
    }
    const topic = await TopicServices.updateTopic(
      request.body.topic_category_name,
      request.params.topic_id
    );
    if (!topic) {
      return responder(response, false, "ERROR_TOPIC_UPDATE", {}, 400);
    }
    return responder(response, true, "TOPIC_UPDATE", { topic });
  } catch (err) {
    console.log(err);
    return responder(response, false, "FAILURE", {}, 500);
  }
};
