require("dotenv").config();
const { queue } = require("./queues/queue-binder");
const processQueue = queue(process.env.QUEUE || "aQueue");

// register events pipelines & queues
processQueue.process((job, done) => {
	let aBill = job.data;
	console.log(`Se ha recibido un gasto ${JSON.stringify(aBill)}`);
	setTimeout(done, 0);
});
