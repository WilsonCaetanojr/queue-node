import Queue from "bull";
import redisConfig from "../config/redis";
import RegistrationMail from "../jobs/registrationMail";

const newQueue = new Queue(RegistrationMail.key, redisConfig);
//new Queue('name', configDatabase)

export default newQueue;
