const Agenda = require("agenda");
const config = require('../config/index');
const connectionOpts = {
    db: { address: "localhost:27017/agenda-test", collection: "agendaJobs" },
};
const agenda = new Agenda(connectionOpts);

const isSameDate = (dateA, dateB) => dateA.toDateString() === dateB.toDateString();
const isBeforeDate = (dateA, dateB) => dateA < dateB;
const isAfterDate = (dateA, dateB) => dateA > dateB;

let today = new Date();
today = `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`

let n1 = isSameDate(new Date(config.startDate), new Date(today));
let n2 = isBeforeDate(new Date(today), new Date(config.endDate));
let n3 = isAfterDate(new Date(config.startDate), new Date(today));

agenda.define("remove event", async (job) => {
    console.log("I am remove")
    await job.save();
});

(async function () {
    // IIFE to give access to async/await

        await agenda.start();
        await agenda.every("2 seconds", "remove event");


    // Alternatively, you could also do:
    //await agenda.every("*/1 * * * *", "remove event");
})();

module.exports = agenda;
