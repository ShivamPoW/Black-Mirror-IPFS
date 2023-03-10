import * as IPFS from "ipfs-core"; //js-ipfs <= 0.52 pr go-ipfs <= 0.6.0
import OrbitDB from "orbit-db";

async function createDatabase(name) {
  const ipfsOptions = {
    // relay: { enabled: true },
    // hop: { enabled: true, active: true },
    EXPERIMENTAL: { pubsub: true },
    // config: {
    //   Addresses: {
    //     Swarm: [
    //       "/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star",
    //     ],
    //   },
    // },
    repo: "./ipfs",
    // config: { Bootstrap: [], Addresses: { Swarm: [] } },
  };
  const ipfs = await IPFS.create(ipfsOptions);

  const orbitdb = await OrbitDB.createInstance(ipfs); //, { offline: false }
  const options = {
    accessController: {
      write: orbitdb.identity.id,
    },
  };
  const db = await orbitdb.create(name, 'docstore', {
    accessController: {
      write: [
        orbitdb.identity.id,
      ]
    },
})
  return db;
}

//   if (!OrbitDB.isValidType(type)) {
//     console.log("Wrong Datatype"); // Will show wrong for docs and log
//   }
//   return type == "docstore" //docstore
//     ? await orbitdb.docs(name, options)
//     : type == "Keyvalue"
//     ? await orbitdb.keyvalue(name, options)
//     : type == "feed"
//     ? await orbitdb.feed(name, options)
//     : type == "eventlog"
//     ? await orbitdb.eventlog(name, options)
//     : await orbitdb.counter(name, options);
// }

async function openDatabase(addr, type) {
  const ipfsOptions = { repo: "./ipfs" };
  const ipfs = await IPFS.create(ipfsOptions);
  const orbitdb = await OrbitDB.createInstance(ipfs);
  return await orbitdb.open(addr, {
    localOnly: true,
    // create: true,
    // type: type,
    overwrite: false,
    replicate: true,
  });
}

export { createDatabase, openDatabase}; // openDatabase
