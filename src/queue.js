import "dotenv/config";
import Queue from "./lib/queue";
import RegistrationMail from "./jobs/registrationMail";

Queue.process(RegistrationMail.handle);
