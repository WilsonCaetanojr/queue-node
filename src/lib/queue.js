import Queue from "bull";
import redisConfig from "../config/redis";
import RegistrationMail from "../jobs/registrationMail";
import jobs from "../jobs/index";

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle
}));

export default {
  queues,
  add(name, data) {
    const queueSelect = this.queues.find(
      currentQueue => currentQueue.name === name
    );

    return queueSelect.bull.add(data);
  },
  process() {
    return this.queues.forEach(currentQueue => {
      currentQueue.bull.process(currentQueue.handle);

      currentQueue.bull.on("failed", (job, err) => {
        console.log(`ERROR-JOB: ${currentQueue.key}`, job);
        console.log(err);
      });
    });
  }
};
