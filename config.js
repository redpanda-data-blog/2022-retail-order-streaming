db.disableFreeMonitoring(); //permanently disable reminder for free monitoring


rsconf = {
          _id: "rs0",   // the name of the replica set
          members: [{ _id: 0, host: "cdc-mongo:27017", priority: 1.0 }], //adding this instance to the set
};

rs.initiate(rsconf);  //initiating the replica set configured above

rs.status();  // returning the current status of the replcation set
